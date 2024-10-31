const N_SQUARES = 3000;
let lastElement = null;
for (let i = 0; i < N_SQUARES; i++) {
  const $square = document.createElement('div');
  $square.classList.add('square');
  document.body.appendChild($square);
}

const start = e => {
  const move = e => {
    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    if (!element) return;

    if (element && element?.classList.contains('square')) {
      if (lastElement && lastElement !== element) {
        lastElement.classList.remove('active');
      }
      element.classList.add('active');
      lastElement = element;
    }
  };

  const end = () => {
    document.removeEventListener('touchmove', move);
    document.removeEventListener('touchend', end);
  };

  document.addEventListener('touchmove', move, { passive: true });
  document.addEventListener('touchend', end, { passive: true });
};

document.addEventListener('touchstart', start, { passive: true });
