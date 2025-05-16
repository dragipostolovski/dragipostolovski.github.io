const slides = document.querySelectorAll('#slider .slide');
const dotsContainer = document.querySelector('#slider .slider-dots');

// Remove existing dots (if any)
dotsContainer.innerHTML = "";

// Dynamically create dots based on the number of slides
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('#slider .dot');
let current = 0;

function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === idx);
    dots[i].classList.toggle('active', i === idx);
  });
  current = idx;
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});

// Optional: auto-slide
setInterval(() => showSlide((current + 1) % slides.length), 4000);