/* ==========================================================
   UPVERSE DISTRICT RENDERER
   Modern Component Engine with Interactive Cards & Leaflet Maps
========================================================== */
"use strict";

const Renderer = (() => {
    let districtMap = null;
    let markersLayer = null;

    /* ======================================================
       DOM HELPERS
    ====================================================== */
    function $(id) {
        return document.getElementById(id);
    }

    function setText(id, value, fallback = "--") {
        const el = $(id);
        if (el) el.textContent = value || fallback;
    }

    function setHTML(id, value, fallback = "") {
        const el = $(id);
        if (el) el.innerHTML = value || fallback;
    }

    function setImage(id, src, fallback = "assets/images/hero.webp") {
        const img = $(id);
        if (!img) return;
        img.src = src || fallback;
        img.onerror = () => {
            img.src = fallback;
        };
    }

    function capitalize(text) {
        if (!text) return "";
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    /* ======================================================
       HERO & QUICK STATS
    ====================================================== */
    function renderHero(data) {
        const name = data?.basic?.name || data?.name || "District";
        const tagline = data?.basic?.tagline || data?.tagline || `Experience the rich heritage and culture of ${name}.`;
        const slug = data?.basic?.slug || data?.slug || "varanasi";

        setText("districtName", name);
        setText("districtTagline", tagline);
        document.title = `${name} • UPVERSE`;

        const heroImg = $("districtHeroImage");
        if (heroImg) {
            heroImg.src = `assets/images/districts/${slug}.webp`;
            heroImg.alt = name;
            heroImg.onerror = function () {
                this.src = "assets/images/hero.webp";
            };
        }
    }

    function renderQuickStats(data) {
        setText("population", data?.basic?.population || data?.population || "Diverse & Vibrant");
        setText("area", data?.basic?.area || data?.area || "Historical Heartland");
        setText("bestSeason", data?.basic?.bestSeason || data?.bestSeason || "Oct to Mar");
        setText("famousFor", data?.basic?.famousFor || data?.famousFor || "Heritage & Culture");
    }

    /* ======================================================
       AI INSIGHTS & OVERVIEW
    ====================================================== */
    function renderAIInsights(data) {
        setText("aiScore", `${data?.ai?.score || 95}%`);
        setText("bestVisit", data?.ai?.bestTravelMonth || data?.basic?.bestSeason || "Winter (Nov - Feb)");
        setText("recommendedStay", data?.ai?.recommendedStay || "2 - 3 Days");
        setText("budgetRange", data?.ai?.budgetRange || "₹3,000 - ₹8,000");
        setText("travelStyle", data?.ai?.travelStyle || "Cultural & Experiential");

        const perfectForContainer = $("perfectFor");
        if (perfectForContainer) {
            perfectForContainer.innerHTML = "";
            const items = data?.ai?.perfectFor || ["Heritage Lovers", "Photographers", "Families", "Spiritual Seekers"];
            items.forEach((item) => {
                const span = document.createElement("span");
                span.className = "chip-item";
                span.textContent = item;
                perfectForContainer.appendChild(span);
            });
        }
    }

    function renderOverview(data) {
        const overview = data?.ai?.overview || data?.overview ||
            `${data?.basic?.name || "This district"} is one of the most culturally significant regions in Uttar Pradesh, blending ancient history, sacred traditions, iconic architecture, and vibrant community life.`;
        setText("districtOverview", overview);
    }

    function renderHighlights(data) {
        const name = data?.basic?.name || "District";
        setText("historyHighlight", data?.highlights?.history || `Rooted deep in the civilizational history of northern India with sacred landmarks.`);
        setText("foodHighlight", data?.highlights?.food || `Famed for authentic regional culinary delights and traditional Awadhi & Purvanchali tastes.`);
        setText("natureHighlight", data?.highlights?.nature || `Lush riverbanks, sanctuaries, and picturesque rural landscapes.`);
        setText("spiritualHighlight", data?.highlights?.spiritual || `Ancient temples, ghats, and cultural ceremonies echoing timeless spirituality.`);
    }

    /* ======================================================
       TRAVEL METER & MOODS
    ====================================================== */
    function renderTravelMeter(data) {
        const container = $("travelMeter");
        if (!container) return;
        container.innerHTML = "";

        const defaultMeter = {
            Heritage: 95,
            Spirituality: 90,
            Cuisine: 88,
            Photography: 92,
            Shopping: 85
        };

        const meter = data?.travelMeter || defaultMeter;

        Object.entries(meter).forEach(([key, value]) => {
            const num = parseInt(value, 10) || 85;
            container.insertAdjacentHTML(
                "beforeend",
                `
                <div class="meter-item">
                    <div class="meter-label">
                        <span>${capitalize(key)}</span>
                        <span class="meter-val">${num}%</span>
                    </div>
                    <div class="progress">
                        <div class="progress-fill" style="width:${num}%"></div>
                    </div>
                </div>
                `
            );
        });
    }

    function renderMoods(data) {
        const container = $("moodGrid");
        if (!container) return;
        container.innerHTML = "";

        const moods = data?.moods || ["Peaceful & Spiritual", "Historic Charm", "Culinary Feast", "Photogenic Alleyways", "Vibrant Festivities"];
        moods.forEach((mood) => {
            container.insertAdjacentHTML(
                "beforeend",
                `<div class="mood-chip">✨ ${mood}</div>`
            );
        });
    }

    /* ======================================================
       TOURIST PLACES
    ====================================================== */
    function renderPlaces(data) {
        const container = $("placesGrid");
        if (!container) return;
        container.innerHTML = "";

        const places = data?.places || [];
        if (!places.length) {
            container.innerHTML = `<div class="empty-card">Explore the sacred ghats, ancient temples, and monuments.</div>`;
            return;
        }

        places.forEach((place) => {
            container.insertAdjacentHTML(
                "beforeend",
                `
                <div class="info-card place-card">
                    <div class="info-card-header">
                        <span class="card-badge"><i class="fa-solid fa-location-dot"></i> Top Attraction</span>
                        ${place.rating ? `<span class="rating-badge"><i class="fa-solid fa-star"></i> ${place.rating}</span>` : ""}
                    </div>
                    <h3 class="info-card-title">${place.name}</h3>
                    <p class="info-card-desc">${place.description || "A must-visit cultural and historical landmark in the district."}</p>
                    
                    <div class="card-meta-tags">
                        ${place.bestTime ? `<span><i class="fa-regular fa-clock"></i> ${place.bestTime}</span>` : ""}
                        ${place.entryFee ? `<span><i class="fa-solid fa-ticket"></i> ${place.entryFee}</span>` : ""}
                        ${place.visitDuration ? `<span><i class="fa-solid fa-hourglass-half"></i> ${place.visitDuration}</span>` : ""}
                    </div>

                    <div class="info-card-footer">
                        <button class="ask-ai-place btn-sm" data-name="${place.name}">
                            <i class="fa-solid fa-wand-magic-sparkles"></i> Ask AI
                        </button>
                        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.name + " " + (data?.basic?.name || ""))}" target="_blank" rel="noopener" class="map-link-sm">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i> Maps
                        </a>
                    </div>
                </div>
                `
            );
        });
    }

    /* ======================================================
       FOOD & CUISINE
    ====================================================== */
    function renderFoods(data) {
        const container = $("foodGrid");
        if (!container) return;
        container.innerHTML = "";

        const foods = data?.foods || [];
        if (!foods.length) {
            container.innerHTML = `<div class="empty-card">Famous for traditional sweets, street food, and regional thalis.</div>`;
            return;
        }

        foods.forEach((food) => {
            container.insertAdjacentHTML(
                "beforeend",
                `
                <div class="info-card food-card">
                    <div class="info-card-header">
                        <span class="card-badge food-badge"><i class="fa-solid fa-utensils"></i> Authentic Dish</span>
                    </div>
                    <h3 class="info-card-title">${food.name}</h3>
                    <p class="info-card-desc">${food.description || "A cherished culinary specialty with generations of authentic recipe tradition."}</p>
                    ${food.bestSpot ? `<div class="card-meta-tags"><span><i class="fa-solid fa-store"></i> Best at: ${food.bestSpot}</span></div>` : ""}
                </div>
                `
            );
        });
    }

    /* ======================================================
       FESTIVALS
    ====================================================== */
    function renderFestivals(data) {
        const container = $("festivalGrid");
        if (!container) return;
        container.innerHTML = "";

        const festivals = data?.festivals || [];
        if (!festivals.length) {
            container.innerHTML = `<div class="empty-card">Celebrates Dev Deepawali, Holi, Dussehra, and vibrant regional fairs.</div>`;
            return;
        }

        festivals.forEach((f) => {
            container.insertAdjacentHTML(
                "beforeend",
                `
                <div class="info-card festival-card">
                    <div class="info-card-header">
                        <span class="card-badge festival-badge"><i class="fa-solid fa-sparkles"></i> Celebration</span>
                    </div>
                    <h3 class="info-card-title">${f.name}</h3>
                    <p class="info-card-desc">${f.description || "An exuberant cultural festival celebrated with lights, traditional music, and joyful gatherings."}</p>
                    ${f.time ? `<div class="card-meta-tags"><span><i class="fa-regular fa-calendar"></i> ${f.time}</span></div>` : ""}
                </div>
                `
            );
        });
    }

    /* ======================================================
       HIDDEN GEMS
    ====================================================== */
    function renderHiddenGems(data) {
        const container = $("hiddenGemGrid");
        if (!container) return;
        container.innerHTML = "";

        const gems = data?.hiddenGems || [];
        if (!gems.length) {
            container.innerHTML = `<div class="empty-card">Discover serene spots and lesser-known historical sites across the district.</div>`;
            return;
        }

        gems.forEach((gem) => {
            container.insertAdjacentHTML(
                "beforeend",
                `
                <div class="info-card gem-card">
                    <div class="info-card-header">
                        <span class="card-badge gem-badge"><i class="fa-solid fa-gem"></i> Off the Beaten Track</span>
                    </div>
                    <h3 class="info-card-title">${gem.name}</h3>
                    <p class="info-card-desc">${gem.description || "A peaceful secret destination away from tourist crowds, waiting to be explored."}</p>
                </div>
                `
            );
        });
    }

    /* ======================================================
       NEARBY DISTRICTS
    ====================================================== */
    function renderNearby(data) {
        const container = $("nearbyGrid");
        if (!container) return;
        container.innerHTML = "";

        const nearby = data?.nearby || [];
        if (!nearby.length) {
            container.innerHTML = `<div class="empty-card">Check the Explore page to see all surrounding districts.</div>`;
            return;
        }

        nearby.forEach((item) => {
            const slug = item.slug || item.name.toLowerCase().replace(/\s+/g, "-");
            container.insertAdjacentHTML(
                "beforeend",
                `
                <div class="info-card nearby-card" data-slug="${slug}" style="cursor: pointer;">
                    <div class="info-card-header">
                        <span class="card-badge"><i class="fa-solid fa-route"></i> Nearby</span>
                        <span class="distance-badge">${item.distance || "Connected by Highway"}</span>
                    </div>
                    <h3 class="info-card-title">${item.name}</h3>
                    <p class="info-card-desc">Click to take an AI-powered deep dive into ${item.name}.</p>
                    <div class="card-action-link">Explore ${item.name} &rarr;</div>
                </div>
                `
            );
        });
    }

    /* ======================================================
       LEAFLET MAP
    ====================================================== */
    function renderMap(data) {
        const mapContainer = $("districtMap");
        if (!mapContainer || typeof L === "undefined") return;

        if (districtMap) {
            districtMap.remove();
            districtMap = null;
        }

        const lat = data?.location?.lat || 25.3176;
        const lng = data?.location?.lng || 82.9739;
        const zoom = data?.location?.zoom || 11;
        const districtName = data?.basic?.name || "District";

        try {
            districtMap = L.map("districtMap", {
                zoomControl: true,
                scrollWheelZoom: false
            }).setView([lat, lng], zoom);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: "&copy; OpenStreetMap contributors",
                maxZoom: 18
            }).addTo(districtMap);

            // District Center Marker
            const districtMarker = L.marker([lat, lng])
                .addTo(districtMap)
                .bindPopup(`
                    <div style="font-family: inherit; color: #111;">
                        <h4 style="margin: 0 0 5px; color: #ff9933;">📍 ${districtName}</h4>
                        <p style="margin: 0; font-size: 13px;">${data?.basic?.tagline || "Heart of Uttar Pradesh"}</p>
                    </div>
                `);

            districtMarker.openPopup();

            // Place Markers
            if (Array.isArray(data?.places)) {
                data.places.forEach((p) => {
                    if (p.lat && p.lng) {
                        L.marker([p.lat, p.lng])
                            .addTo(districtMap)
                            .bindPopup(`
                                <div style="font-family: inherit; color: #111;">
                                    <h4 style="margin: 0 0 4px;">${p.name}</h4>
                                    <p style="margin: 0; font-size: 12px; color: #555;">${p.description ? p.description.slice(0, 100) + '...' : ''}</p>
                                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.name + ' ' + districtName)}" target="_blank" style="display:inline-block; margin-top:6px; color:#ff9933; font-weight:600; font-size:12px;">Open in Google Maps &rarr;</a>
                                </div>
                            `);
                    }
                });
            }
        } catch (err) {
            console.error("Map initialization failed:", err);
            mapContainer.innerHTML = `<div class="empty-card" style="padding: 40px; text-align: center;">Interactive Map centered on ${districtName}. Coordinates: ${lat}, ${lng}</div>`;
        }
    }

    /* ======================================================
       ASK AI ANSWER & STATES
    ====================================================== */
    function renderAIAnswer(answer) {
        setHTML("aiAnswer", answer || "No response received.");
    }

    function showLoading() {
        document.body.classList.add("loading");
    }

    function hideLoading() {
        document.body.classList.remove("loading");
    }

    function showError(message) {
        setHTML(
            "districtOverview",
            `
            <div class="error-card">
                <h3>⚠️ Notice</h3>
                <p>${message}</p>
            </div>
            `
        );
    }

    /* ======================================================
       MASTER RENDER
    ====================================================== */
    function render(data) {
        renderHero(data);
        renderQuickStats(data);
        renderAIInsights(data);
        renderOverview(data);
        renderHighlights(data);
        renderTravelMeter(data);
        renderMoods(data);
        renderPlaces(data);
        renderFoods(data);
        renderFestivals(data);
        renderHiddenGems(data);
        renderNearby(data);
        renderMap(data);
    }

    return {
        render,
        renderHero,
        renderQuickStats,
        renderAIInsights,
        renderOverview,
        renderHighlights,
        renderTravelMeter,
        renderMoods,
        renderPlaces,
        renderFoods,
        renderFestivals,
        renderHiddenGems,
        renderNearby,
        renderMap,
        renderAIAnswer,
        showLoading,
        hideLoading,
        showError
    };
})();
