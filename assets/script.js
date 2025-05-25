const slider = () => {
    // SLIDER
  const slides = document.querySelectorAll('#slider .slide');
  const dotsContainer = document.querySelector('#slider .slider-dots');

  if( slides.length === 0 || dotsContainer === null ) return;
  if( !dotsContainer) return;

  // Remove existing dots (if any)
  dotsContainer.innerHTML = "";

  // Only create dots if their count doesn't match the number of slides
  if (dotsContainer.children.length !== slides.length) {
    slides.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dotsContainer.appendChild(dot);
    });
  }

  const dots = document.querySelectorAll('#slider .dot');
  let current = 0;
  let autoSlideInterval = null;

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

  // Auto-slide logic with pause on hover
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => showSlide((current + 1) % slides.length), 3000);
  }
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  dotsContainer.addEventListener('mouseenter', stopAutoSlide);
  dotsContainer.addEventListener('mouseleave', startAutoSlide);

  startAutoSlide();
}

const rotator = () => {
    // ROTATOR
  const rotatorCircle = document.querySelector('.rotator-circle');
  const centerText = document.querySelector('.rotator-circle-text');
  const rotatorNextBtn = document.querySelector('.next-btn');
  const rotatorPrevBtn = document.querySelector('.prev-btn');

  if( !rotatorCircle) return;
  if(!centerText || !rotatorNextBtn || !rotatorPrevBtn) return;

  let rotation = 23; // Start at 23 degrees
  const rotatorWords = [
    "PHP",
    "WordPress",
    "JavaScript",
    "Gutenberg",
    "HTML",
    "CSS",
    "React",
    "Sass",
    "Elementor",
    "Git"
  ];
  let currentIndex = 0;

  function updateCenterText() {
    centerText.classList.add('fade-out');
    setTimeout(() => {
      centerText.textContent = rotatorWords[currentIndex];
      centerText.classList.remove('fade-out');
      centerText.classList.add('fade-in');
      setTimeout(() => {
        centerText.classList.remove('fade-in');
      }, 400);
    }, 400);
  }

  rotatorNextBtn.addEventListener('click', () => {
    rotation += 45;
    rotatorCircle.style.transform = `rotate(${rotation}deg)`;
    currentIndex = (currentIndex + 1) % rotatorWords.length;
    updateCenterText();
  });

  rotatorPrevBtn.addEventListener('click', () => {
    rotation -= 45;
    rotatorCircle.style.transform = `rotate(${rotation}deg)`;
    currentIndex = (currentIndex - 1 + rotatorWords.length) % rotatorWords.length;
    updateCenterText();
  }); 
}

const navigation = () => {
  // Responsive Navbar Toggle
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarLinks = document.querySelector('.navbar-links');
  if (navbarToggle && navbarLinks) {
    navbarToggle.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    });
  } 
}

const faq = () => {
  const faqQuestions = document.querySelectorAll('.faq-question');
  if( !faqQuestions ) return;

  faqQuestions.forEach(btn => {
    btn.addEventListener('click', function() {
      const answer = this.parentElement.querySelector('.faq-answer');
      const isOpen = this.classList.toggle('open');
      if (isOpen) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        answer.style.maxHeight = null;
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  slider();
  rotator();
  navigation();
  faq();
});