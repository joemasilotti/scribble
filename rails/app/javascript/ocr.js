const ocr = () => {
  const canvas = document.querySelector('[data-notes-target="canvas"]');
  const ctx = canvas.getContext('2d');
  const lineWidth = 3;

  canvas.width = canvas.clientWidth
  canvas.height = canvas.clientHeight

  let isPainting = false;
  let startX;
  let startY;

  // Mouse
  // canvas.addEventListener('mousedown', (e) => {
  //   isPainting = true;
  //   startX = e.clientX;
  //   startY = e.clientY;
  // });
  // canvas.addEventListener('mousemove', e => {
  //   if (!isPainting) {
  //     return;
  //   }
  //   ctx.lineWidth = lineWidth;
  //   ctx.lineCap = 'round';
  //   ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  //   ctx.stroke();
  // });
  // canvas.addEventListener('mouseup', () => {
  //   isPainting = false;
  //   ctx.stroke();
  //   ctx.beginPath();
  // });

  // Touch
  canvas.addEventListener('touchstart', (e) => {
    isPainting = true;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  });
  canvas.addEventListener('touchend', () => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
  });
  canvas.addEventListener('touchmove', e => {
    if (!isPainting) {
      return;
    }
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineTo(e.touches[0].clientX - canvas.offsetLeft, e.touches[0].clientY - canvas.offsetTop);
    ctx.stroke();
  });
};

export { ocr }
