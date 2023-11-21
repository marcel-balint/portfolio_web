const menuIcon = document.querySelector(".mobile-icon");
const navigationLinks = document.querySelector(".nav-links");
const navigationItems = document.querySelectorAll(".nav-links li");
const navigation = document.querySelector("nav");
const swiperEl = document.querySelector("swiper-container");
const readMoreBtn = document.querySelector(".read-more");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");

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

// Modal functionality

readMoreBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("active")) {
    modal.classList.remove("active");
  }
});

// Swiper styles
const prevBtn = swiperEl.swiper.el.children[3];
prevBtn.style.top = "45%";
prevBtn.style.height = "27px";
prevBtn.style.padding = "5px 7px 5px 5px";
prevBtn.style.marginLeft = "20px";
prevBtn.style.borderRadius = "20px";
prevBtn.style.color = "#000";
prevBtn.style.backgroundColor = "rgba(255,255,255, 0.7)";

const nextBtn = swiperEl.swiper.el.children[4];
nextBtn.style.top = "45%";
nextBtn.style.height = "27px";
nextBtn.style.padding = "5px 5px 5px 7px";
nextBtn.style.marginRight = "20px";
nextBtn.style.borderRadius = "20px";
nextBtn.style.color = "#000";
nextBtn.style.backgroundColor = "rgba(255,255,255, 0.7)";

const paginationBullets = swiperEl.swiper.el.children[5].children;
for (const bullet of paginationBullets) {
  console.log(bullet);
  bullet.style.width = ".7rem";
  bullet.style.height = ".7rem";
}

// Adjust styles for smaller screens
if (window.screen.width < 760) {
  prevBtn.style.top = "37%";
  prevBtn.style.padding = "0px";
  nextBtn.style.padding = "0px";
  nextBtn.style.top = "37%";
}

window.addEventListener("resize", (event) => {
  if (window.screen.width < 760) {
    prevBtn.style.top = "37%";
    prevBtn.style.padding = "0px";
    nextBtn.style.padding = "0px";
    nextBtn.style.top = "37%";
  }
});
