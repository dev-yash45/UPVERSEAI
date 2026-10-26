/* ==========================================================
   UPVERSE THEME ENGINE
   Unified Dark / Light Mode Controller
========================================================== */
"use strict";

(function () {
    const THEME_KEY = "upverse_theme";

    function getPreferredTheme() {
        const explicit = localStorage.getItem("upverse_theme_explicit");
        const saved = localStorage.getItem(THEME_KEY) || localStorage.getItem("theme");
        if (explicit && (saved === "light" || saved === "dark")) {
            return saved;
        }
        // UPVERSE default signature theme is dark
        return "dark";
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);
        if (document.body) {
            document.body.setAttribute("data-theme", theme);
            if (theme === "light") {
                document.body.classList.add("light-mode");
            } else {
                document.body.classList.remove("light-mode");
            }
        }
        localStorage.setItem(THEME_KEY, theme);
        localStorage.setItem("theme", theme);
        updateButtons(theme);
    }

    function updateButtons(theme) {
        const buttons = document.querySelectorAll("#themeToggle, .theme-btn");
        buttons.forEach((btn) => {
            const icon = btn.querySelector("i");
            if (icon) {
                if (theme === "light") {
                    icon.className = "fa-solid fa-sun";
                } else {
                    icon.className = "fa-solid fa-moon";
                }
            }
        });
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute("data-theme") || getPreferredTheme();
        const next = current === "light" ? "dark" : "light";
        localStorage.setItem("upverse_theme_explicit", "true");
        applyTheme(next);
        return next;
    }

    // Apply immediately to prevent flash
    const initialTheme = getPreferredTheme();
    document.documentElement.setAttribute("data-theme", initialTheme);

    document.addEventListener("DOMContentLoaded", () => {
        applyTheme(getPreferredTheme());

        document.addEventListener("click", (e) => {
            const btn = e.target.closest("#themeToggle, .theme-btn");
            if (btn) {
                e.preventDefault();
                toggleTheme();
            }
        });
    });

    window.toggleTheme = toggleTheme;
    window.setTheme = applyTheme;
    window.getTheme = () => document.documentElement.getAttribute("data-theme") || "dark";
})();
