// Toggle mobile menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const animatedElements = document.querySelectorAll(".animate-on-scroll");
const logoWhite = document.querySelector(".logo-white");
const logoBlack = document.querySelector(".logo-black");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Navbar scroll background
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const words = ["Conversion", "Awareness"];
let index = 0;

const rotatingWord = document.querySelector(".rotating-word");

setInterval(() => {
  index = (index + 1) % words.length;
  rotatingWord.textContent = words[index];
}, 2000); // changes every 2 seconds

function toggleLogos() {
  const showWhite = window.scrollY > 50;
  logoWhite.style.display = showWhite ? "block" : "none";
  logoBlack.style.display = showWhite ? "none" : "block";
}

window.addEventListener("scroll", toggleLogos);
window.addEventListener("DOMContentLoaded", toggleLogos);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Animate once only
      }
    });
  },
  {
    threshold: 0.9,
  }
);

animatedElements.forEach((el) => {
  observer.observe(el);
});

const track = document.querySelector(".slider-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let indexNum = 0;

function updateSlider() {
  const slideWidth = document.querySelector(".slide").offsetWidth + 32; // 32px = 2rem gap
  track.style.transform = `translateX(-${indexNum * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  if (indexNum < track.children.length - 1) {
    indexNum++;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (indexNum > 0) {
    indexNum--;
    updateSlider();
  }
});

// Optional: Reset on window resize
window.addEventListener("resize", updateSlider);
