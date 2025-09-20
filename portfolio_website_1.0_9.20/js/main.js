// Light-Dark mode switching
window.addEventListener('load', function() { // when page loaded
    // checking for button click:
    styleButton = document.querySelector(".navbar .btn-empty");

    styleButton.addEventListener('click', () => { // when button clicked
        swapStyleSheet();
    });

    mobileStyleButton = document.querySelector(".navbar .btn-empty.mobile");

    mobileStyleButton.addEventListener('click', () => { // when button clicked
        swapStyleSheet();
    });
});

function swapStyleSheet() {
    var pageStyle = document.getElementById("page-style");

    if (localStorage.getItem("theme") == "light") { // if in light mode
        pageStyle.setAttribute("href", "css/dark.css"); // change style sheet
        localStorage.setItem("theme", "dark"); // saves setting to local storage
    }
    else { // if in dark mode
        pageStyle.setAttribute("href", "css/light.css"); // change style sheet
        localStorage.setItem("theme", "light"); // saves setting to local storage
    };
};

// Mobile Menu w/ Hamburger Button
window.addEventListener('load', function() { // when page loaded
    const hamburgerButton = document.querySelector(".btn-hamburger");
    const mobileMenu = document.querySelector(".mobile-menu");

    hamburgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle("active");
        hamburgerButton.classList.toggle("active");
    });
});

// Contact Card + Exit Button
window.addEventListener('load', function() { // when page loaded
    const contactButton = document.querySelector(".main-menu .btn-compact");
    const mobileContactButton = document.querySelector(".mobile-menu .btn-compact");
    const exitButton = document.querySelector(".contact-menu .btn-exit");
    const contactMenu = document.querySelector(".contact-menu");

    
    function toggleContactCard () { // Toggles contact card display
        contactMenu.classList.toggle("active");
    };

    contactButton.addEventListener('click', () => {
        toggleContactCard();
    });

    mobileContactButton.addEventListener('click', () => {
        toggleContactCard();
    });

    exitButton.addEventListener('click', () => {
        toggleContactCard();
    });

    // Adds ESC key functionality
    window.addEventListener("keyup", function(e) {
        if (contactMenu.classList.contains("active") && e.key == "Escape") {
            toggleContactCard();
        };
    });
    
});