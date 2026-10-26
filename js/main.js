/* ======================================================
   UPVERSE
   Core Application Logic
   Version : 2.0
====================================================== */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    console.log("🚀 UPVERSE Initialized");

    initNavbar();
    initSmoothScroll();
    initScrollIndicator();
    initGlobalLoader();
});

/* ======================================================
   NAVBAR SCROLL EFFECT
====================================================== */
function initNavbar() {
    const header = document.querySelector("header, .navbar");
    if (!header) return;

    const handleScroll = () => {
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
}

/* ======================================================
   SMOOTH SCROLL FOR HASH LINKS
====================================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            if (!targetId || targetId === "#") return;

            try {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            } catch (err) {
                // Ignore invalid CSS selector in href
            }
        });
    });
}

/* ======================================================
   GLOBAL PAGE LOADER
====================================================== */
function initGlobalLoader() {
    const loader = document.querySelector(".loader");
    if (!loader) return;

    window.addEventListener("load", () => {
        setTimeout(() => {
            loader.style.transition = "opacity 0.6s ease, visibility 0.6s ease";
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            setTimeout(() => {
                if (loader.parentNode) {
                    loader.style.display = "none";
                }
            }, 600);
        }, 600);
    });

    // Fallback in case load already fired
    setTimeout(() => {
        if (loader && loader.style.visibility !== "hidden") {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }
    }, 2500);
}

/* ======================================================
   SCROLL INDICATOR
====================================================== */
function initScrollIndicator() {
    const indicator = document.querySelector(".scroll-indicator");
    if (!indicator) return;

    indicator.addEventListener("click", () => {
        window.scrollBy({
            top: window.innerHeight * 0.85,
            behavior: "smooth"
        });
    });
}
