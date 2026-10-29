"use strict";

/* ==========================================================
   UPVERSE DISTRICT CONTROLLER
   Coordinates AI data loading, gallery, and interactive exploration
========================================================== */

let districtSlug = null;
let districtData = null;

/* ==========================================================
   GET SLUG WITH SAFE FALLBACK & CANONICAL RESOLUTION
========================================================== */
function getDistrictSlug() {
    const params = new URLSearchParams(window.location.search);
    const paramVal = params.get("slug") || params.get("district") || params.get("name") || params.get("id");
    if (!paramVal) return "varanasi";

    const cleaned = paramVal.trim().toLowerCase();

    // Numerical ID fallback
    if (/^\d+$/.test(cleaned) && typeof districts !== "undefined") {
        const foundById = districts.find(d => String(d.id) === cleaned);
        if (foundById) return foundById.slug;
    }

    // Canonical slug resolution (handles aliases, historical names, spaces)
    if (typeof window.resolveCanonicalDistrictSlug === "function") {
        return window.resolveCanonicalDistrictSlug(cleaned);
    }

    if (typeof districts !== "undefined") {
        const match = districts.find(d =>
            d.slug === cleaned ||
            d.name.toLowerCase() === cleaned ||
            (d.aliases && d.aliases.some(a => a.toLowerCase() === cleaned || a.toLowerCase().replace(/\s+/g, "-") === cleaned))
        );
        if (match) return match.slug;
    }

    return cleaned;
}

function resolveDistrictImage(slug) {
    if (slug === "kanpur-nagar") return "assets/images/districts/kanpur.webp";
    return `assets/images/districts/${slug}.webp`;
}

/* ==========================================================
   LOAD DISTRICT
========================================================== */
async function loadDistrict() {
    try {
        Renderer.showLoading();
        districtSlug = getDistrictSlug();

        districtData = await UPVERSE_API.getDistrictAIData(districtSlug);
        console.log("District Data =>", districtData);

        window.currentDistrictData = districtData;

        Renderer.render(districtData);
        renderDistrictHeroImage(districtData);
        await Gallery.init(districtData);
    } catch (error) {
        console.error(error);
        Renderer.showError(error.message || "Unable to load district.");
    } finally {
        Renderer.hideLoading();
    }
}

function renderDistrictHeroImage(data) {
    const heroImage = document.getElementById("districtHeroImage");
    if (!heroImage) return;

    const slug = data?.basic?.slug || districtSlug;
    heroImage.src = resolveDistrictImage(slug);
    heroImage.alt = data?.basic?.name || "District";

    heroImage.onerror = function () {
        this.src = "assets/images/hero.webp";
    };
}

function planTrip() {
    window.location.href = `tripPlanner.html?district=${districtSlug}`;
}

/* ==========================================================
   ASK AI INTERACTION
========================================================== */
const askBtn = document.getElementById("askAiBtn");
const askInput = document.getElementById("aiQuestion");

if (askBtn && askInput) {
    askBtn.addEventListener("click", async () => {
        const question = askInput.value.trim();
        if (!question) {
            Renderer.renderAIAnswer("Please enter a question to ask UPVERSE AI.");
            return;
        }

        Renderer.renderAIAnswer(`
            <div style="display:flex; align-items:center; gap:10px; color:var(--primary);">
                <i class="fa-solid fa-spinner fa-spin"></i>
                <span>UPVERSE AI is analyzing heritage archives & local intelligence...</span>
            </div>
        `);

        try {
            const response = await UPVERSE_API.askDistrictAI(districtSlug, question);
            const answer = response?.answer || response?.result || "No response received.";
            Renderer.renderAIAnswer(answer);
        } catch (error) {
            console.error(error);
            Renderer.renderAIAnswer(`
                <p><strong>AI Insight for ${districtData?.basic?.name || "this district"}:</strong></p>
                <p>Best explored early morning and during evening aarti/sunset. Immerse yourself in the local heritage markets, sample authentic cuisine, and hire registered local guides for monuments.</p>
            `);
        }
    });

    askInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            askBtn.click();
        }
    });
}

/* ==========================================================
   SHARE DISTRICT
========================================================== */
const shareBtn = document.getElementById("shareDistrictBtn");
if (shareBtn) {
    shareBtn.addEventListener("click", async () => {
        const name = districtData?.basic?.name || "Uttar Pradesh";
        const tagline = districtData?.basic?.tagline || "Experience the Soul of Uttar Pradesh";
        try {
            if (navigator.share) {
                await navigator.share({
                    title: `${name} • UPVERSE`,
                    text: tagline,
                    url: window.location.href
                });
            } else {
                await navigator.clipboard.writeText(window.location.href);
                const originalText = shareBtn.textContent;
                shareBtn.textContent = "Link Copied! ✓";
                setTimeout(() => {
                    shareBtn.textContent = originalText;
                }, 2000);
            }
        } catch (error) {
            console.warn("Share cancelled or not supported");
        }
    });
}

/* ==========================================================
   NEARBY DISTRICT DEEP DIVE
========================================================== */
const nearbyGrid = document.getElementById("nearbyGrid");
if (nearbyGrid) {
    nearbyGrid.addEventListener("click", (e) => {
        const card = e.target.closest("[data-slug]");
        if (!card) return;
        window.location.href = `district.html?slug=${card.dataset.slug}`;
    });
}

/* ==========================================================
   ASK AI FROM PLACE CARD
========================================================== */
document.addEventListener("click", (e) => {
    const button = e.target.closest(".ask-ai-place");
    if (!button || !askInput || !askBtn) return;

    const place = button.dataset.name;
    askInput.value = `Tell me the history, timings, entry tips, and best photography spots for ${place}.`;
    const askSection = document.querySelector(".ask-ai-section");
    if (askSection) {
        askSection.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => {
        askBtn.click();
    }, 400);
});

/* ==========================================================
   INITIALIZE
========================================================== */
window.addEventListener("DOMContentLoaded", () => {
    loadDistrict();
});

console.log("✅ District Controller Ready");
