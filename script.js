
/* ==============================
   MOBILE NAVIGATION
============================== */

const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", isOpen);

    if (isOpen) {
        menuButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});


/* ==============================
   NAVIGATION ACTIVE LINK
============================== */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';

        document.querySelectorAll(".nav-links a").forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });

});


/* ==============================
   CONTACT FORM
============================== */

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    formMessage.textContent =
        "Thank you for your message! This form is a demo and is not connected to email yet.";

    this.reset();

});
