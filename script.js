document.addEventListener("DOMContentLoaded", function () {
    // Selecteer elementen
    const menu = document.getElementById("mobileMenu");
    const openBtn = document.getElementById("menuOpenBtn");
    const closeBtn = document.getElementById("menuCloseBtn");
    const promoBadge = document.getElementById("promoBadge");
    const closePromoBtn = document.getElementById("closePromoBtn");
    
    const arrowButtons = document.querySelectorAll(".menu-link.has-arrow");
    const backButtons = document.querySelectorAll(".back-btn");
    const allSubmenus = document.querySelectorAll(".submenu-panel");

    // 1. Open het hoofdmenu
    openBtn.addEventListener("click", function () {
        menu.classList.add("is-open");
    });

    // 2. Sluit het volledige menu
    closeBtn.addEventListener("click", function () {
        menu.classList.remove("is-open");
        // Reset alle submenu's als het menu sluit
        allSubmenus.forEach(panel => panel.classList.remove("is-active"));
    });

    // 3. Ga naar een Submenu (Herenkleding, Schoenen, etc.)
    arrowButtons.forEach(button => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add("is-active");
            }
        });
    });

    // 4. Terugknop binnen een submenu
    backButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Verwijder 'is-active' van het huidige geopende panel
            this.parentElement.classList.remove("is-active");
        });
    });

    // 5. Sluit de 10% kortingsbalk onderaan
    closePromoBtn.addEventListener("click", function () {
        promoBadge.style.display = "none";
    });
});
