/* ==========================================================
   UPVERSE AI TRIP PLANNER CONTROLLER
   Form validation, geolocation, and AI trip coordination
========================================================== */
"use strict";

const form = document.getElementById("tripPlannerForm");
const generateButton = document.querySelector(".generate-btn");
const detectLocationBtn = document.getElementById("detectLocationBtn");
const startingLocation = document.getElementById("startingLocation");
const locationStatus = document.getElementById("locationStatus");

const urlParams = new URLSearchParams(window.location.search);
const districtSlug = urlParams.get("district");

function $(id) {
    return document.getElementById(id);
}

/* ==========================================================
   AUTO FILL & FORM DEFAULTS
========================================================== */
const UP_ALL_DISTRICTS = [
    "Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh",
    "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti",
    "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah",
    "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar (Noida)", "Ghaziabad",
    "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun",
    "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi",
    "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri",
    "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh",
    "Prayagraj", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur",
    "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"
];

function initializePlanner() {
    // Populate Datalist
    const datalist = $("upDistrictsList");
    if (datalist && datalist.children.length === 0) {
        UP_ALL_DISTRICTS.forEach((d) => {
            const opt = document.createElement("option");
            opt.value = d;
            datalist.appendChild(opt);
        });
    }

    const districtInput = $("district");
    if (districtInput) {
        if (districtSlug) {
            const districtName = districtSlug
                .replaceAll("-", " ")
                .replace(/\b\w/g, (char) => char.toUpperCase());
            districtInput.value = districtName;
        } else if (!districtInput.value) {
            districtInput.value = "Ayodhya";
        }
        districtInput.readOnly = false;
        districtInput.placeholder = "Enter or select destination (e.g. Ayodhya, Varanasi, Agra)";
    }

    // Set default dates: minimum today, default tomorrow
    const startDateInput = $("startDate");
    if (startDateInput) {
        const today = new Date();
        const tomorrow = new Date(Date.now() + 86400000);
        startDateInput.min = today.toISOString().split("T")[0];
        if (!startDateInput.value) {
            startDateInput.value = tomorrow.toISOString().split("T")[0];
        }
    }

    // Set default travellers
    const travellersInput = $("travellers");
    if (travellersInput && !travellersInput.value) {
        travellersInput.value = "2";
    }

    // Set default starting location if blank
    if (startingLocation && !startingLocation.value) {
        startingLocation.value = "Lucknow, Uttar Pradesh";
    }
}

/* ==========================================================
   GEOLOCATION DETECTION
========================================================== */
if (detectLocationBtn) {
    detectLocationBtn.addEventListener("click", getCurrentLocation);
}

async function getCurrentLocation() {
    if (!navigator.geolocation) {
        if (locationStatus) locationStatus.textContent = "Geolocation is not supported by your browser.";
        return;
    }

    detectLocationBtn.disabled = true;
    detectLocationBtn.textContent = "⌛ Detecting...";
    if (locationStatus) locationStatus.textContent = "Locating via GPS...";

    navigator.geolocation.getCurrentPosition(
        successLocation,
        errorLocation,
        {
            enableHighAccuracy: true,
            timeout: 8000,
            maximumAge: 60000
        }
    );
}

async function successLocation(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    await reverseGeocode(lat, lng);
}

function errorLocation(error) {
    detectLocationBtn.disabled = false;
    detectLocationBtn.textContent = "📍 Use My Location";
    if (locationStatus) {
        locationStatus.textContent = "Could not access GPS. Please type your city above.";
    }
}

async function reverseGeocode(lat, lng) {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);

        const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`,
            { signal: controller.signal }
        );
        clearTimeout(timeoutId);

        const data = await response.json();
        const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            data.address.state_district ||
            data.address.county ||
            "Uttar Pradesh";

        const state = data.address.state || "India";

        if (startingLocation) {
            startingLocation.value = `${city}, ${state}`;
        }
        if (locationStatus) locationStatus.textContent = "✅ Location detected";
        detectLocationBtn.textContent = "✅ Detected";

        setTimeout(() => {
            detectLocationBtn.textContent = "📍 Use My Location";
        }, 2000);
    } catch (e) {
        if (locationStatus) locationStatus.textContent = "GPS detected. Enter your city above.";
        detectLocationBtn.textContent = "📍 Retry";
    }
    detectLocationBtn.disabled = false;
}

/* ==========================================================
   FORM SUBMIT
========================================================== */
if (form) {
    form.addEventListener("submit", handleTripPlanner);
}

async function handleTripPlanner(event) {
    event.preventDefault();

    if (generateButton) {
        generateButton.classList.add("loading");
        generateButton.textContent = "Generating AI Trip Plan...";
    }

    try {
        const tripData = collectFormData();
        await generateAITrip(tripData);
    } catch (error) {
        console.error(error);
    } finally {
        if (generateButton) {
            generateButton.classList.remove("loading");
            generateButton.textContent = "✨ Generate AI Trip Plan";
        }
    }
}

function collectFormData() {
    return {
        district: $("district")?.value || "Varanasi",
        startingLocation: startingLocation?.value.trim() || "Lucknow, Uttar Pradesh",
        startDate: $("startDate")?.value || new Date().toISOString().split("T")[0],
        duration: $("duration")?.value || "2 Days",
        budget: $("budget")?.value || "₹3000–₹7000",
        travellers: $("travellers")?.value || "2",
        travelStyle: $("style")?.value || "Heritage",
        stay: $("stay")?.value || "Hotel",
        transport: $("transport")?.value || "Train",
        food: $("food")?.value || "Veg",
        specialRequest: $("special")?.value || ""
    };
}

async function generateAITrip(tripData) {
    showPlanningUI();
    startPlanningAnimation();

    try {
        const response = await UPVERSE_API.generateTripPlan(tripData);
        completePlanningAnimation();

        setTimeout(() => {
            hidePlanningUI();
            renderTripResult(response);
            scrollToResults();
        }, 1200);
    } catch (error) {
        console.error("Trip planning error:", error);
        completePlanningAnimation();
        setTimeout(() => {
            hidePlanningUI();
            const fallback = createFallbackTripPlan(tripData);
            renderTripResult(fallback);
        }, 1200);
    }
}

document.addEventListener("DOMContentLoaded", initializePlanner);
console.log("✅ Trip Planner Controller Ready");
