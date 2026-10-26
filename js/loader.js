/* ==========================================================
   UPVERSE LOADER ENGINE
   Graceful transitions, dynamic spinner & skeleton states
========================================================== */
"use strict";

window.UPVERSE_LOADER = {
    show(message = "Loading UPVERSE Experience...") {
        let loader = document.getElementById("upverseGlobalLoader");
        if (!loader) {
            loader = document.createElement("div");
            loader.id = "upverseGlobalLoader";
            loader.className = "loader";
            loader.innerHTML = `
                <div class="loader-content">
                    <div class="loader-spinner"></div>
                    <h1>UPVERSE</h1>
                    <p id="upverseLoaderMsg">${message}</p>
                </div>
            `;
            document.body.appendChild(loader);
        } else {
            const msgEl = document.getElementById("upverseLoaderMsg");
            if (msgEl) msgEl.textContent = message;
            loader.style.display = "flex";
            loader.style.opacity = "1";
            loader.style.visibility = "visible";
        }
    },

    hide() {
        const loader = document.getElementById("upverseGlobalLoader") || document.querySelector(".loader");
        if (!loader) return;
        loader.style.transition = "opacity 0.5s ease, visibility 0.5s ease";
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        setTimeout(() => {
            if (loader.id === "upverseGlobalLoader" && loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        }, 500);
    }
};
