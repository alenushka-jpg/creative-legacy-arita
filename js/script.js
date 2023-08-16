// функция которая вызывает все остальное

const init = () => {
  const showNextSlide = () => {
    console.log('next');
  }

  const showPrevSlide = () => {
    console.log('prev');
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
          console.log('scroll up');
          helperInput.value = 0;
          showPrevSlide();
          setTimeout(() => {
            helperInput.value = 1;
          }, 1500);
        }

      } else {
        if (helperInput.value == '1') {
          console.log('scroll down');
          helperInput.value = 0;
          showNextSlide();
          setTimeout(() => {
            helperInput.value = 1;
          }, 1500);
        }
      }
    })
  } else {
    document.addEventListener('swiped-left', () => {
      showNextSlide();
    });
    document.addEventListener('swiped-left', () => {
      showPrevSlide();
    });
  }
}

init();
