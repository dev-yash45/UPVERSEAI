"use strict";

/* ==========================================================
   UPVERSE GALLERY MODULE
   Fetches authentic Wikimedia images with caching & modal
========================================================== */

const Gallery = {
    districtName: "",
    districtSlug: "",
    places: [],
    images: [],
    cacheKey: "",

    async init(districtData) {
        try {
            if (!districtData) return;

            const name = districtData?.basic?.name || districtData?.name || "Uttar Pradesh";
            this.districtSlug = districtData?.basic?.slug || districtData?.slug || "varanasi";
            this.districtName = name;
            this.places = this.extractPlaces(districtData);
            this.cacheKey = `upverse_gallery_${name.toLowerCase().replace(/\s+/g, "-")}`;

            this.clearOldCache();

            const closeBtn = document.getElementById("closeGalleryModal");
            if (closeBtn) {
                closeBtn.onclick = () => this.closeModal();
            }

            const modal = document.getElementById("galleryModal");
            if (modal) {
                modal.addEventListener("click", (e) => {
                    if (e.target === modal) this.closeModal();
                });
            }

            document.addEventListener("keydown", (e) => {
                if (e.key === "Escape") this.closeModal();
            });

            if (this.places.length === 0) {
                console.warn("No gallery places found.");
                return;
            }

            // Load Cache
            if (this.loadCache() && this.images.length > 0) {
                console.log("✅ Gallery Loaded From Cache");
                this.render();
                return;
            }

            this.showLoading();
            await this.fetchImages();
            this.cacheImages();
            this.render();
        } catch (error) {
            console.error("Gallery Error:", error);
            this.renderFallback();
        }
    },

    extractPlaces(data) {
        const places = [];

        if (Array.isArray(data.places)) {
            data.places.forEach((p) => {
                if (p?.name) places.push(p.name);
            });
        }

        if (Array.isArray(data.hiddenGems)) {
            data.hiddenGems.forEach((p) => {
                if (p?.name) places.push(p.name);
            });
        }

        if (Array.isArray(data.gallery)) {
            data.gallery.forEach((g) => {
                if (typeof g === "string") places.push(g);
                else if (g?.title) places.push(g.title);
            });
        }

        return [...new Set(places)];
    },

    showLoading() {
        const galleryGrid = document.getElementById("galleryGrid");
        if (!galleryGrid) return;
        galleryGrid.innerHTML = `
            <div class="gallery-loading" style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--primary);">
                <i class="fa-solid fa-spinner fa-spin" style="font-size: 2rem; margin-bottom: 12px;"></i>
                <p>Curating high-resolution gallery images...</p>
            </div>
        `;
    },

    async fetchImages() {
        const fallbackDistrictImg = `assets/images/districts/${this.districtSlug}.webp`;

        this.images = await Promise.all(
            this.places.slice(0, 8).map(async (place) => {
                const img = await this.fetchWikimediaImage(place, this.districtName);
                return {
                    title: place,
                    image: img || fallbackDistrictImg
                };
            })
        );
    },

    async fetchWikimediaImage(place, district) {
        try {
            const queries = [
                `${place}, ${district}, Uttar Pradesh, India`,
                `${place} ${district}`,
                `${place} Uttar Pradesh`,
                place
            ];

            for (const query of queries) {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 4000);

                const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&format=json&origin=*`;
                const searchResponse = await fetch(searchUrl, { signal: controller.signal });
                clearTimeout(timeoutId);

                if (!searchResponse.ok) continue;

                const searchData = await searchResponse.json();
                if (!searchData?.query?.search?.length) continue;

                for (const result of searchData.query.search.slice(0, 2)) {
                    const summaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(result.title)}`;
                    const summaryResponse = await fetch(summaryUrl);
                    if (!summaryResponse.ok) continue;

                    const summary = await summaryResponse.json();
                    if (summary.thumbnail?.source) {
                        return summary.thumbnail.source;
                    }
                    if (summary.originalimage?.source) {
                        return summary.originalimage.source;
                    }
                }
            }
            return null;
        } catch (error) {
            return null;
        }
    },

    // Alias to prevent any legacy errors
    async fetchWikipediaImage(place, district) {
        return this.fetchWikimediaImage(place, district);
    },

    cacheImages() {
        try {
            localStorage.setItem(this.cacheKey, JSON.stringify(this.images));
        } catch (error) {
            console.error("Cache Error:", error);
        }
    },

    loadCache() {
        try {
            const cache = localStorage.getItem(this.cacheKey);
            if (!cache) return false;
            this.images = JSON.parse(cache);
            return Array.isArray(this.images) && this.images.length > 0;
        } catch (error) {
            return false;
        }
    },

    render() {
        const galleryGrid = document.getElementById("galleryGrid");
        if (!galleryGrid) return;

        galleryGrid.innerHTML = "";

        if (!this.images || this.images.length === 0) {
            this.renderFallback();
            return;
        }

        this.images.forEach((img) => {
            galleryGrid.appendChild(this.createCard(img));
        });
    },

    renderFallback() {
        const galleryGrid = document.getElementById("galleryGrid");
        if (!galleryGrid) return;

        const defaultImg = `assets/images/districts/${this.districtSlug}.webp`;
        galleryGrid.innerHTML = `
            <div class="gallery-card" style="grid-column: 1 / -1; max-width: 500px; margin: 0 auto; text-align: center;">
                <img src="${defaultImg}" alt="${this.districtName}" onerror="this.src='assets/images/hero.webp'" style="border-radius: 18px; width: 100%;">
                <div style="padding: 15px; color: var(--text-light);">
                    <h3>${this.districtName} Heritage</h3>
                </div>
            </div>
        `;
    },

    openModal(image) {
        const modal = document.getElementById("galleryModal");
        const modalImg = document.getElementById("galleryModalImage");
        const modalTitle = document.getElementById("galleryModalTitle");

        if (!modal || !modalImg) return;

        modalImg.src = image.image || `assets/images/districts/${this.districtSlug}.webp`;
        if (modalTitle) modalTitle.textContent = image.title;

        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    },

    closeModal() {
        const modal = document.getElementById("galleryModal");
        if (modal) modal.style.display = "none";
        document.body.style.overflow = "";
    },

    clearOldCache() {
        const currentKey = this.cacheKey;
        Object.keys(localStorage).forEach((key) => {
            if (key.startsWith("upverse_gallery_") && key !== currentKey) {
                localStorage.removeItem(key);
            }
        });
    },

    createCard(image) {
        const card = document.createElement("div");
        card.className = "gallery-card";
        card.addEventListener("click", () => this.openModal(image));

        const fallback = `assets/images/districts/${this.districtSlug}.webp`;

        card.innerHTML = `
            <img
                src="${image.image || fallback}"
                alt="${image.title}"
                loading="lazy"
                onerror="this.src='${fallback}'; this.onerror=function(){this.src='assets/images/hero.webp';};"
            >
            <div class="gallery-overlay">
                <h3>${image.title}</h3>
                <span class="view-btn"><i class="fa-solid fa-expand"></i> View Fullscreen</span>
            </div>
        `;

        return card;
    }
};

console.log("✅ Gallery Module Ready");
