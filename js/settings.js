const bgItems = document.querySelectorAll('.slide-bg__item');
const bgLinks = document.querySelectorAll('.slide-bg__link');
const shapes = document.querySelectorAll('.shapes__content');
const shapeItems = document.querySelectorAll('.shapes__item');
const helperInput = document.querySelector('#helper-input');
const mouse = document.querySelector('.mouse');
const slideBg = document.querySelector('.slide-bg');
const links = document.querySelectorAll('a');
const promoSlide = document.querySelector('.promo');
const slideCount = 5;
let slideCounter = 1;
const easing = BezierEasing(0.770, 0.125, 0.265, 1.040);

const startComplete = () => {
  bgItems.forEach(el => {
    el.style.opacity = 1
  });
  shapeItems.forEach(el => {
    el.style.opacity = 1
  });
}

const startinTl = gsap.timeline({
  default: {
      ease: easing
    },
    onComplete: startComplete
});
