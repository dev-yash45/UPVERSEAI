/* ==========================================================
   UPVERSE UNIVERSAL NAVBAR & MOBILE MENU CONTROLLER
========================================================== */
"use strict";

(function () {
    function getCurrentPage() {
        const path = window.location.pathname;
        const page = path.split("/").pop() || "index.html";
        return page;
    }

    function renderNavbar() {
        const placeholder = document.getElementById("navbar");
        if (!placeholder) return;

        const currentPage = getCurrentPage();

        placeholder.innerHTML = `
        <header class="navbar-header">
            <nav class="navbar container">
                <a href="index.html" class="logo">
                    <span class="logo-accent">UP</span>VERSE
                </a>

                <ul class="nav-links">
                    <li><a href="index.html" class="${currentPage === "index.html" || currentPage === "" ? "active" : ""}">Home</a></li>
                    <li><a href="explore.html" class="${currentPage === "explore.html" ? "active" : ""}">Explore Districts</a></li>
                </ul>

                <div class="nav-actions">
                    <button class="theme-btn" id="themeToggle" aria-label="Toggle theme">
                        <i class="fa-solid fa-moon"></i>
                    </button>
                    <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle navigation menu">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>
            </nav>
        </header>

        <!-- Mobile Drawer Menu -->
        <div class="mobile-nav-drawer" id="mobileNavDrawer">
            <div class="drawer-header">
                <span class="logo"><span class="logo-accent">UP</span>VERSE</span>
                <button class="close-drawer-btn" id="closeDrawerBtn"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <ul class="drawer-links">
                <li><a href="index.html"><i class="fa-solid fa-house"></i> Home</a></li>
                <li><a href="explore.html"><i class="fa-solid fa-compass"></i> Explore Districts</a></li>
            </ul>
        </div>
        <div class="mobile-nav-backdrop" id="mobileNavBackdrop"></div>
        `;
    }

    function initMobileMenu() {
        const menuBtn = document.getElementById("mobileMenuBtn");
        const drawer = document.getElementById("mobileNavDrawer");
        const backdrop = document.getElementById("mobileNavBackdrop");
        const closeBtn = document.getElementById("closeDrawerBtn");

        if (!menuBtn || !drawer || !backdrop) return;

        const openMenu = () => {
            drawer.classList.add("open");
            backdrop.classList.add("open");
            document.body.style.overflow = "hidden";
        };

        const closeMenu = () => {
            drawer.classList.remove("open");
            backdrop.classList.remove("open");
            document.body.style.overflow = "";
        };

        menuBtn.addEventListener("click", openMenu);
        if (closeBtn) closeBtn.addEventListener("click", closeMenu);
        backdrop.addEventListener("click", closeMenu);
    }

    document.addEventListener("DOMContentLoaded", () => {
        renderNavbar();
        initMobileMenu();
    });
})();
