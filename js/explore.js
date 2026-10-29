"use strict";

/* ==========================================================
   CONFIG
========================================================== */

const INITIAL_CARDS = 12;

let filteredDistricts = Array.isArray(districts) ? [...districts] : [];

let visibleCards = INITIAL_CARDS;


/* ==========================================================
   DOM
========================================================== */

const districtGrid = document.getElementById("districtGrid");

const featuredTitle = document.getElementById("featuredTitle");

const featuredDescription = document.getElementById("featuredDescription");

const featuredCategory = document.getElementById("featuredCategory");

const featuredPriority = document.getElementById("featuredPriority");

const featuredImage = document.getElementById("featuredImage");

const loadMoreBtn = document.getElementById("loadMoreBtn");

const emptyState = document.getElementById("emptyState");


/* ==========================================================
   FEATURED DISTRICT
========================================================== */

function renderFeaturedDistrict() {
    if (!Array.isArray(districts) || districts.length === 0) return;

    const featured = districts.find(d => d.featured) || districts[0];

    if (!featured) return;

    if (featuredTitle) featuredTitle.textContent = featured.name;

    if (featuredCategory) featuredCategory.textContent = (featured.categories || []).join(", ");

    if (featuredPriority) featuredPriority.textContent = "Priority " + (featured.priority || 10);

    if (featuredImage) {
        featuredImage.src = featured.image || "assets/images/hero.webp";
        featuredImage.onerror = function() {
            this.src = "assets/images/hero.webp";
        };
    }

    if (featuredDescription) {
        featuredDescription.textContent = `Discover the culture, history, tourism and hidden gems of ${featured.name}.`;
    }
}


/* ==========================================================
   CARD TEMPLATE
========================================================== */

function createDistrictCard(district) {
    const cats = district.categories || ["culture"];
    const img = district.image || `assets/images/districts/${district.slug}.webp`;
    return `
<div class="district-card" data-slug="${district.slug}" data-id="${district.id}">
    <div class="district-image">
        <img src="${img}" alt="${district.name}" loading="lazy" onerror="this.src='assets/images/hero.webp'">
        <button class="favorite-btn" aria-label="Add to favorites">
            <i class="fa-regular fa-heart"></i>
        </button>
    </div>
    <div class="district-content">
        <h3>${district.name}</h3>
        <div class="category-tags">
            ${cats.map(cat => `<span class="category-tag">${cat}</span>`).join("")}
        </div>
        <p>Explore AI-powered tourism, sacred sites, culinary secrets, and heritage.</p>
        <div class="card-footer">
            <a href="district.html?slug=${district.slug}" class="explore-card-link">
                Explore District
                <i class="fa-solid fa-arrow-right"></i>
            </a>
        </div>
    </div>
</div>
`;
}


/* ==========================================================
   RENDER GRID
========================================================== */

function renderDistricts() {
    if (!districtGrid) return;
    districtGrid.innerHTML = "";

    const items = filteredDistricts.slice(0, visibleCards);

    items.forEach(d => {
        districtGrid.insertAdjacentHTML("beforeend", createDistrictCard(d));
    });

    toggleLoadMore();
    restoreFavorites();
    toggleEmptyState();
}


/* ==========================================================
   LOAD MORE
========================================================== */

function toggleLoadMore() {
    if (!loadMoreBtn) return;
    if (visibleCards >= filteredDistricts.length) {
        loadMoreBtn.style.display = "none";
    } else {
        loadMoreBtn.style.display = "inline-flex";
    }
}


/* ==========================================================
   EMPTY STATE
========================================================== */

function toggleEmptyState() {
    if (!emptyState || !districtGrid) return;
    if (filteredDistricts.length === 0) {
        emptyState.classList.remove("hidden");
        districtGrid.style.display = "none";
    } else {
        emptyState.classList.add("hidden");
        districtGrid.style.display = "grid";
    }
}


/* ==========================================================
   SEARCH DOM
========================================================== */

const searchInput = document.getElementById("districtSearch");

const searchBtn = document.getElementById("searchBtn");

const clearBtn = document.getElementById("clearSearch");

const suggestionBox = document.getElementById("searchSuggestions");


/* ==========================================================
   INTELLIGENT RANKED SEARCH
   Matches Name, Slug, Aliases, Categories & Keywords with Scoring
========================================================== */

function searchDistricts(query) {
    if (!Array.isArray(districts)) return;

    query = (query || "").replace(/^#/, "").trim().toLowerCase();

    if (query === "") {
        filteredDistricts = [...districts];
        visibleCards = INITIAL_CARDS;
        renderDistricts();
        hideSuggestions();
        if (clearBtn) clearBtn.style.display = "none";
        return;
    }

    if (clearBtn) clearBtn.style.display = "inline-flex";

    const tokens = query.split(/\s+/).filter(Boolean);
    const scored = [];

    for (const d of districts) {
        const name = d.name.toLowerCase();
        const slug = d.slug.toLowerCase();
        const aliases = (d.aliases || []).map(a => a.toLowerCase());
        const keywords = (d.keywords || []).map(k => k.toLowerCase());
        const categories = (d.categories || []).map(c => c.toLowerCase());

        let score = 0;

        // Exact match on name or slug
        if (slug === query || name === query) {
            score += 130;
        } else if (name.startsWith(query) || slug.startsWith(query)) {
            score += 90;
        } else if (name.includes(query) || slug.includes(query)) {
            score += 60;
        }

        // Aliases match (e.g. Allahabad -> Prayagraj, Kashi -> Varanasi)
        for (const a of aliases) {
            if (a === query) score += 110;
            else if (a.startsWith(query)) score += 80;
            else if (a.includes(query)) score += 50;
        }

        // Keywords match (e.g. Taj Mahal, locks, perfume, dholak, dudhwa)
        for (const k of keywords) {
            if (k === query) score += 45;
            else if (k.startsWith(query)) score += 35;
            else if (k.includes(query)) score += 25;
        }

        // Categories match
        for (const c of categories) {
            if (c === query) score += 20;
            else if (c.includes(query)) score += 10;
        }

        // Multi-word token matching across all combined fields
        if (tokens.length > 1) {
            let matchedTokenCount = 0;
            const allText = `${name} ${slug} ${aliases.join(" ")} ${keywords.join(" ")} ${categories.join(" ")}`;
            for (const t of tokens) {
                if (allText.includes(t)) {
                    matchedTokenCount++;
                    score += 25;
                }
            }
            if (matchedTokenCount === tokens.length) {
                score += 50; // Bonus when all query words match
            }
        }

        if (score > 0) {
            score += (d.priority || 5);
            scored.push({ district: d, score });
        }
    }

    scored.sort((a, b) => b.score - a.score);
    filteredDistricts = scored.map(s => s.district);

    visibleCards = INITIAL_CARDS;
    renderDistricts();
    showSuggestions(filteredDistricts);
}


/* ==========================================================
   SUGGESTIONS
========================================================== */

function showSuggestions(results) {
    if (!suggestionBox) return;
    suggestionBox.innerHTML = "";

    if (!results || results.length === 0) {
        hideSuggestions();
        return;
    }

    results.slice(0, 6).forEach(d => {
        const cats = (d.categories || []).join(", ");
        suggestionBox.insertAdjacentHTML(
            "beforeend",
            `
            <div class="suggestion-item" data-slug="${d.slug}">
                <div>
                    <strong>${d.name}</strong>
                    <br>
                    <span>${cats}</span>
                </div>
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
            `
        );
    });

    suggestionBox.style.display = "block";
}

function hideSuggestions() {
    if (suggestionBox) {
        suggestionBox.style.display = "none";
    }
}


/* ==========================================================
   OPEN DISTRICT
========================================================== */

function openDistrict(slug) {
    if (!slug) return;
    window.location.href = `district.html?slug=${slug}`;
}


/* ==========================================================
   BEST MATCH
========================================================== */

function openBestMatch() {
    if (!searchInput) return;
    const value = searchInput.value.replace(/^#/, "").trim().toLowerCase();
    if (value === "") return;

    if (filteredDistricts.length > 0) {
        openDistrict(filteredDistricts[0].slug);
    } else if (typeof window.resolveCanonicalDistrictSlug === "function") {
        const canonical = window.resolveCanonicalDistrictSlug(value);
        openDistrict(canonical);
    }
}


/* ==========================================================
   EVENTS
========================================================== */

if (searchInput) {
    searchInput.addEventListener("input", e => {
        searchDistricts(e.target.value);
    });

    searchInput.addEventListener("keydown", e => {
        if (e.key === "Enter") {
            e.preventDefault();
            openBestMatch();
        }
    });
}

if (searchBtn) {
    searchBtn.addEventListener("click", () => {
        openBestMatch();
    });
}

if (clearBtn) {
    clearBtn.addEventListener("click", () => {
        if (searchInput) {
            searchInput.value = "";
            searchInput.focus();
        }
        filteredDistricts = [...districts];
        visibleCards = INITIAL_CARDS;
        renderDistricts();
        hideSuggestions();
        clearBtn.style.display = "none";
    });
}

const resetSearchBtn = document.getElementById("resetSearchBtn");
if (resetSearchBtn) {
    resetSearchBtn.addEventListener("click", () => {
        if (clearBtn) {
            clearBtn.click();
        } else {
            if (searchInput) searchInput.value = "";
            filteredDistricts = [...districts];
            visibleCards = INITIAL_CARDS;
            renderDistricts();
            hideSuggestions();
        }
    });
}

// Close suggestion box on outside click
document.addEventListener("click", e => {
    if (suggestionBox && !suggestionBox.contains(e.target) && e.target !== searchInput) {
        hideSuggestions();
    }
});


/* ==========================================================
   SUGGESTION CLICK
========================================================== */

if (suggestionBox) {
    suggestionBox.addEventListener("click", e => {
        const item = e.target.closest(".suggestion-item");
        if (!item) return;
        openDistrict(item.dataset.slug);
    });
}


/* ==========================================================
   FILTERS
========================================================== */

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        if (filter === "all") {
            filteredDistricts = [...districts];
        } else {
            filteredDistricts = districts.filter(d =>
                (d.categories || []).includes(filter)
            );
        }

        visibleCards = INITIAL_CARDS;
        renderDistricts();
        hideSuggestions();
    });
});


/* ==========================================================
   TRENDING SEARCH
========================================================== */

document.querySelectorAll(".trend-chip").forEach(chip => {
    chip.addEventListener("click", () => {
        const query = chip.textContent.trim();
        if (searchInput) {
            searchInput.value = query;
        }
        searchDistricts(query);
        openBestMatch();
    });
});


/* ==========================================================
   LOAD MORE
========================================================== */

if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
        visibleCards += INITIAL_CARDS;
        renderDistricts();
    });
}


/* ==========================================================
   CARD CLICK
========================================================== */

if (districtGrid) {
    districtGrid.addEventListener("click", e => {
        const card = e.target.closest(".district-card");
        if (!card) return;
        if (e.target.closest(".favorite-btn")) return;
        openDistrict(card.dataset.slug);
    });
}


/* ==========================================================
   RANDOM DISTRICT
========================================================== */

const randomBtn = document.getElementById("randomDistrictBtn");

if (randomBtn) {
    randomBtn.addEventListener("click", () => {
        if (!Array.isArray(districts) || districts.length === 0) return;
        const random = districts[Math.floor(Math.random() * districts.length)];
        openDistrict(random.slug);
    });
}


/* ==========================================================
   SCROLL TO TOP
========================================================== */

const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add("show");
        } else {
            scrollTopBtn.classList.remove("show");
        }
    });

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


/* ==========================================================
   FAVORITES
========================================================== */

function getFavorites() {
    try {
        return JSON.parse(localStorage.getItem("favorites") || "[]");
    } catch {
        return [];
    }
}

function saveFavorites(data) {
    try {
        localStorage.setItem("favorites", JSON.stringify(data));
    } catch (e) {
        console.warn("Could not save favorites:", e);
    }
}

if (districtGrid) {
    districtGrid.addEventListener("click", e => {
        const favBtn = e.target.closest(".favorite-btn");
        if (!favBtn) return;
        e.stopPropagation();

        const card = favBtn.closest(".district-card");
        if (!card) return;
        const slug = card.dataset.slug;

        let favorites = getFavorites();

        if (favorites.includes(slug)) {
            favorites = favorites.filter(item => item !== slug);
            favBtn.classList.remove("active");
            favBtn.innerHTML = `<i class="fa-regular fa-heart"></i>`;
        } else {
            favorites.push(slug);
            favBtn.classList.add("active");
            favBtn.innerHTML = `<i class="fa-solid fa-heart"></i>`;
        }

        saveFavorites(favorites);
    });
}


/* ==========================================================
   RESTORE FAVORITES
========================================================== */

function restoreFavorites() {
    const favorites = getFavorites();

    document.querySelectorAll(".district-card").forEach(card => {
        const slug = card.dataset.slug;
        const btn = card.querySelector(".favorite-btn");
        if (!btn) return;

        if (favorites.includes(slug)) {
            btn.classList.add("active");
            btn.innerHTML = `<i class="fa-solid fa-heart"></i>`;
        } else {
            btn.classList.remove("active");
            btn.innerHTML = `<i class="fa-regular fa-heart"></i>`;
        }
    });
}


/* ==========================================================
   PAGE LOADER
========================================================== */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    renderFeaturedDistrict();
    renderDistricts();

    if (loader) {
        setTimeout(() => {
            loader.classList.add("hidden");
            initializeAnimations();
        }, 600);
    } else {
        initializeAnimations();
    }
});


/* ==========================================================
   GSAP READY
========================================================== */

function initializeAnimations() {
    if (typeof gsap === "undefined") return;

    gsap.from(".hero-tag", {
        y: 30,
        opacity: 0,
        duration: 0.8
    });

    gsap.from(".hero-container h1", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2
    });

    gsap.from(".hero-container p", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.4
    });

    gsap.from(".search-wrapper", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.5
    });

    gsap.from(".filter-btn", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.6
    });
}


/* ==========================================================
   FUTURE AI BUTTON
========================================================== */

const aiButton = document.getElementById("recommendDistrict");

if (aiButton) {
    aiButton.addEventListener("click", () => {
        alert("🚀 AI Recommendation will be connected with Dify Workflow.");
    });
}


/* ==========================================================
   PERFORMANCE
========================================================== */

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        console.log("Explore Page Paused");
    } else {
        console.log("Explore Page Active");
    }
});

/* ==========================================================
   READY
========================================================== */

console.log(
    "%c🚀 UPVERSE Explore Ready",
    "color:#ff9933;font-size:16px;font-weight:bold;"
);
