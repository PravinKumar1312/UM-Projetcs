const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const dotsContainer = document.querySelector(".dots-container");

// Create dots dynamically
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => changeSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

document.querySelector(".next").addEventListener("click", () => {
  changeSlide(currentSlide + 1);
});

document.querySelector(".prev").addEventListener("click", () => {
  changeSlide(currentSlide - 1);
});

function changeSlide(index) {
  // Remove active class from current slide and dot
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");

  // Update currentSlide index, wrapping around if needed
  currentSlide = (index + slides.length) % slides.length;

  // Add active class to the new slide and dot
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

// Auto-slide (Optional)
setInterval(() => {
  changeSlide(currentSlide + 1);
}, 4000);

let startX = 0;

document.querySelector(".slider-container").addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.querySelector(".slider-container").addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) changeSlide(currentSlide + 1); // Swipe left
  else if (endX - startX > 50) changeSlide(currentSlide - 1); // Swipe right
});
