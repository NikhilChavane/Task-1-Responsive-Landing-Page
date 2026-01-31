const navbar = document.getElementById("navbar");
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

    // Navbar style change on scroll
    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Active menu highlight
    sections.forEach(section => {
        const top = section.offsetTop - 180;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (window.scrollY >= top && window.scrollY < top + height) {
            links.forEach(link => link.classList.remove("active"));
            document
                .querySelector(`.nav-link[href="#${id}"]`)
                .classList.add("active");
        }
    });
});
