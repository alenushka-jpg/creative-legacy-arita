// функция которая вызывает все остальное
const init = () => {
  window.onload = function() {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader-animation');

    setTimeout(() => {
      preloader.classList.remove('preloader-animation');
      preloader.classList.add('preloader-hidden');
    }, 3000);

    setTimeout(() => {
      startAnimation();
      preloader.classList.add('preloader-none');
    }, 3200);
  }

  const showNextSlide = () => {
    bgSlides('down');
    imagesSlides('down');
    shapesSlide('down');
    textAnimation('down');
  }

  const showPrevSlide = () => {
    bgSlides('up');
    imagesSlides('up');
    shapesSlide('up');
    textAnimation('up');
  }

  if (window.innerWidth >= 768) {
    // Событие wheel предоставляет свойство deltaY,
    // которое указывает на количество пикселей,
    // на которое колесо мыши было прокручено по вертикали.
    window.addEventListener('wheel', (e) => {
      let delta = -e.deltaY;
      // Значение deltaY положительно при прокрутке вниз и
      // отрицательно при прокрутке вверх. Добавление минуса (-e.deltaY)
      // делает значение delta положительным при прокрутке вверх и
      // отрицательным при прокрутке вниз, т.е. инвертирует направление.

      if (delta > 0) {
        if (helperInput.value == '1') {
          helperInput.value = 0;
          showPrevSlide();
          setTimeout(() => {
            helperInput.value = 1;
          }, 1500);
        }
      } else {
        if (helperInput.value == '1') {
          helperInput.value = 0;
          showNextSlide();
          setTimeout(() => {
            helperInput.value = 1;
          }, 1500);
        }
      }
    });
  } else {
    document.addEventListener('swiped-left', () => {
      showNextSlide();
    });
    document.addEventListener('swiped-right', () => {
      showPrevSlide();
    });
  }
};

init();
