shapes.forEach(el => {
  el.style.backgroundColor = `${el.dataset.bg}`
});

bgLinks.forEach(el => {
  el.style.backgroundImage = `url('${el.dataset.bg}')`;
});
