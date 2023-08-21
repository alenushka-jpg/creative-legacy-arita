shapes.forEach(el => {
  el.style.backgroundColor = `${el.dataset.bg}`
});

bgLinks.forEach(el => {
  el.style.backgroundImage = `url('${el.dataset.bg}')`;
});

const bgSlides = (direction) => {
  let itemClass = `slide-${slideCounter}`;
  if (direction == 'down') {
    if (slideCounter < slidesCount) {
      promoSlide.classList.remove(itemClass);//текущий класс
      slideCounter++;

      itemClass = `slide-${slideCounter}`;
      promoSlide.classList.add(itemClass);
    }
  } else if (direction == 'up') {
    if (slideCounter > 1) {
      promoSlide.classList.remove(itemClass);//текущий класс
      slideCounter--;

      itemClass = `slide-${slideCounter}`;
      promoSlide.classList.add(itemClass);
    }
  }

}
