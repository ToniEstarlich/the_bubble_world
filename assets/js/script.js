
// sow the scroll when you go dows
let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-70px";
  }
  lastScrollY = window.scrollY;
});

// Menu responsive
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});


