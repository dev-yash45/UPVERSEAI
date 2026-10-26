/* ==========================================================
   UPVERSE HERO INTERACTIVE ENGINE
   Parallax, Cloud Drift, and Dynamic Glow Effects
========================================================== */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    if (!hero) return;

    const heroImage = document.querySelector(".hero-right img");
    const cloud1 = document.querySelector(".cloud-1");
    const cloud2 = document.querySelector(".cloud-2");
    const glow1 = document.querySelector(".glow-1");
    const glow2 = document.querySelector(".glow-2");

    // Parallax tilt on mouse move
    hero.addEventListener("mousemove", (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        if (heroImage) {
            heroImage.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateY(-8px) scale(1.02)`;
        }
        if (cloud1) {
            cloud1.style.transform = `translate(${x * 25}px, ${y * 15}px)`;
        }
        if (cloud2) {
            cloud2.style.transform = `translate(${-x * 30}px, ${-y * 20}px)`;
        }
        if (glow1) {
            glow1.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
        }
        if (glow2) {
            glow2.style.transform = `translate(${-x * 40}px, ${-y * 40}px)`;
        }
    });

    hero.addEventListener("mouseleave", () => {
        if (heroImage) {
            heroImage.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0) scale(1)";
        }
        if (cloud1) cloud1.style.transform = "translate(0, 0)";
        if (cloud2) cloud2.style.transform = "translate(0, 0)";
        if (glow1) glow1.style.transform = "translate(0, 0)";
        if (glow2) glow2.style.transform = "translate(0, 0)";
    });
});
