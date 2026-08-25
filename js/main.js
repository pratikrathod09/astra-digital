document.addEventListener("DOMContentLoaded", () => {

    const mobileMenuToggle =
        document.querySelector(".mobile-menu-toggle");

    const mobileMenu =
        document.querySelector(".mobile-menu");

    if (!mobileMenuToggle || !mobileMenu) {
        console.log("MENU ELEMENTS NOT FOUND");
        return;
    }

    console.log("ASTRA MENU JS LOADED");

    mobileMenuToggle.addEventListener("click", () => {

        const isOpen =
            mobileMenu.classList.toggle("active");

        mobileMenuToggle.classList.toggle(
            "active",
            isOpen
        );

        mobileMenuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

    });

    mobileMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");
            mobileMenuToggle.classList.remove("active");

            mobileMenuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

});