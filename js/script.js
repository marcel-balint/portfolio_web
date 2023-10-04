const menuIcon = document.querySelector(".mobile-icon");
const navigationLinks = document.querySelector(".nav-links");
const navigationItems = document.querySelectorAll(".nav-links li");

document.querySelector("video").playbackRate = 0.3;

navigationItems.forEach((el) => {
  el.addEventListener("click", () => {
    navigationLinks.classList.remove("active");
  });
});

menuIcon.addEventListener("click", () => {
  navigationLinks.classList.toggle("active");
});
