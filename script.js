// ================================
// MOBILE MENU
// ================================

const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// ================================
// CLOSE MENU AFTER CLICKING LINK
// ================================

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});


// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been submitted.");

    contactForm.reset();

});


// ================================
// BACK TO TOP BUTTON
// ================================

const topButton = document.getElementById("top-button");

topButton.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================================
// SHOW / HIDE BACK TO TOP BUTTON
// ================================

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});