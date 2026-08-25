document.addEventListener("DOMContentLoaded", () => {

    const mobileMenuToggle =
        document.querySelector(".mobile-menu-toggle");

    const mobileMenu =
        document.querySelector(".mobile-menu");

    if (!mobileMenuToggle || !mobileMenu) {
        console.log("Mobile menu elements not found");
        return;
    }

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


    // Close menu when a link is clicked

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