const menuIcon = document.querySelector(".mobile-icon");
const navigationLinks = document.querySelector(".nav-links");
const navigationItems = document.querySelectorAll(".nav-links li");
const navigation = document.querySelector("nav");

navigationItems.forEach((el) => {
  el.addEventListener("click", () => {
    navigationLinks.classList.remove("active");
    menuIcon.classList.remove("active");
    navigation.classList.toggle("active");
  });
});

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  navigationLinks.classList.toggle("active");
  navigation.classList.toggle("active");
});
