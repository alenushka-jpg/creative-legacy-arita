const shapesSlide = (direction) => {
  let currentShape = document.querySelector('.shapes__item--current');
  let nextShape;
  direction == 'down' ? nextShape = currentShape.nextElementSibling : nextShape = currentShape.previousElementSibling;

  if (nextShape) {
    shapeItems.forEach(el => { el.classList.remove('index'); })
    currentShape.classList.add('index');

    const tl = gsap.timeline({
      defaults: { ease: easing },
      onComplete: function() {
        currentShape.classList.remove('index');
      }
    });

    tl.from(nextShape, 0.5, {
      xPercent: 100
    })
    tl.from(nextShape.querySelector('.shapes__item'), 0.5, {
      xPercent: -100,
      delay: -0.5
    });

    currentShape.classList.remove('shapes__item--current');
    nextShape.classList.add('shapes__item--current');
  }
};
