  /* Carousel */
  const track = document.querySelector(".carousel-track");
  const cards = document.querySelectorAll(".work-card");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  let currentIndex = 0;

  function updateCarousel() {
    const wrapper = document.querySelector(".carousel-track-wrapper");
    const cardWidth = cards[0].offsetWidth;
    const gap = 40; // Make sure this matches your CSS `.carousel-track { gap: 40px }`
  
    const offset = currentIndex * (cardWidth + gap);
  
    const centerOffset = (wrapper.offsetWidth - cardWidth) / 2;
  
    const translateX = centerOffset - offset;
  
    track.style.transform = `translateX(${translateX}px)`;
  
    cards.forEach((card, i) => {
      card.classList.toggle("active", i === currentIndex);
    });
  }

  prevBtn?.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
  });

  nextBtn?.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
  });

  updateCarousel();