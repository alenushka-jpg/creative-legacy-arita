const imagesSlides = (direction) => {
  let currentSlideBg = document.querySelector('.slide-bg__item--current');
  let nextSlide;
  direction == 'down' ? nextSlide = currentSlideBg.nextElementSibling : nextSlide = currentSlideBg.previousElementSibling;

  if (nextSlide) {
    bgLinks.forEach(el => { el.classList.remove('index'); })
    currentSlideBg.classList.add('index');

    const tl = gsap.timeline({
      defaults: { ease: easing },
      onComplete: function() {
        currentSlideBg.classList.remove('index');
      }
    });

    tl.from(nextSlide, 0.5, {
      xPercent: 100
    })
    tl.from(nextSlide.querySelector('.slide-bg__link'), 0.5, {
      xPercent: -100,
      delay: -0.5
    });

    currentSlideBg.classList.remove('slide-bg__item--current');
    nextSlide.classList.add('slide-bg__item--current');
  }
};
