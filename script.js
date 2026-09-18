/* =========================================
   ZP HIGH SCHOOL — CHAVITIPALEM
   Main JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("menuButton");
    const mobileNav = document.getElementById("mobileNav");

    /* -----------------------------------------
       MOBILE MENU
    ----------------------------------------- */

    if (menuButton && mobileNav) {

        menuButton.addEventListener("click", function () {

            mobileNav.classList.toggle("open");

        });


        /* Close menu after selecting a link */

        const mobileLinks =
            mobileNav.querySelectorAll("a");

        mobileLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mobileNav.classList.remove("open");

            });

        });

    }


    /* -----------------------------------------
       CURRENT YEAR
    ----------------------------------------- */

    const currentYear =
        document.querySelector(".site-footer");

    if (currentYear) {

        currentYear.innerHTML =
            currentYear.innerHTML.replace(
                "2026",
                new Date().getFullYear()
            );

    }

});
