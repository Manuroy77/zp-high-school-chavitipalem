document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuButton = document.getElementById("menuButton");
    const mobileNav = document.getElementById("mobileNav");

    if (menuButton && mobileNav) {

        menuButton.addEventListener("click", function () {
            mobileNav.classList.toggle("open");

            const isOpen = mobileNav.classList.contains("open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );
        });

        const mobileLinks = mobileNav.querySelectorAll("a");

        mobileLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                mobileNav.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }


    /* =========================
       SMOOTH SCROLL
    ========================= */

    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });

    });


    /* =========================
       HEADER SCROLL EFFECT
    ========================= */

    const header = document.querySelector(".site-header");

    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 20) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });

    }


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(
        '.desktop-nav a[href^="#"], .mobile-nav a[href^="#"]'
    );

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === "#" + currentSection
            ) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();


    /* =========================
       REVEAL ANIMATION
    ========================= */

    const revealElements = document.querySelectorAll(
        ".section, .card, .highlight-card, .principal-card, .academic-card, .facility-card, .notice-card, .event-card, .achievement-card"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(function (element) {
            element.classList.add("reveal");
            observer.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("show");
        });

    }


    /* =========================
       CURRENT YEAR
    ========================= */

    const yearElements = document.querySelectorAll(
        "[data-current-year]"
    );

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });


    /* =========================
       BACK TO TOP BUTTON
    ========================= */

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }

        });

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================
       IMAGE FALLBACK
    ========================= */

    const images = document.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener("error", function () {

            this.style.display = "none";

        });

    });


    /* =========================
       CONSOLE MESSAGE
    ========================= */

    console.log(
        "ZP High School, Chavitipalem website loaded successfully."
    );

});
