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
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function getVisibleSlidesCount() {
  const wrapperWidth = document.querySelector(".slider-wrapper").offsetWidth;
  const slideWidth = slides[0].offsetWidth + 32; // slide width + gap
  return Math.floor(wrapperWidth / slideWidth);
}

function getMaxIndex() {
  const visibleCount = getVisibleSlidesCount();
  return Math.max(0, slides.length - visibleCount);
}

function updateSlider() {
  const slideWidth = slides[0].offsetWidth + 32; // 32px = gap
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  updateButtons();
}

function updateButtons() {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= getMaxIndex();
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < getMaxIndex()) {
    currentIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

// Recalculate on resize
window.addEventListener("resize", () => {
  currentIndex = Math.min(currentIndex, getMaxIndex());
  updateSlider();
});

// Init on load
window.addEventListener("DOMContentLoaded", () => {
  updateSlider();
});

const modal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".close-btn");

// Data for modal
const serviceData = {
  "Winning Ad Scripts":
    "We’ll write scroll-stopping ad copy using hooks, CTAs, and structures that maximize engagement and conversions. Each script is built for your offer, audience, and platform.",
  "Scroll-Stopping Edits":
    "Our editing style focuses on movement, motion captions, split-screen, emojis, zooms, pacing, and retention tactics that make people stop scrolling and take action.",
  "Optional 1:1 Strategy Call":
    "Jump on a strategy call with our team to get clarity on your messaging, ad angles, and content plan. We’ll help you align your content with your growth goals.",
  "Optimized for Paid & Organic growth":
    "Every asset is built to perform both in paid environments (Meta, TikTok Ads) and organically (Instagram, LinkedIn, Shorts). Fully compliant and creator-first.",
};

// Open modal on card click
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").innerText;
    modalTitle.innerText = title;
    modalDescription.innerText =
      serviceData[title] || "No description available.";
    modal.style.display = "flex";
    document.body.classList.add("modal-open");
  });
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
});

// Close modal when clicking outside modal box
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
});
