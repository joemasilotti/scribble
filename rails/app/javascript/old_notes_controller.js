import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ['canvas'];

  initialize() {
    this.isPainting = false
    this.startX = 0
    this.startY = 0

    this.canvasTarget.width = window.innerWidth - this.canvasTarget.offsetLeft
    this.canvasTarget.height = window.innerHeight - this.canvasTarget.offsetTop

    this.canvasTarget.addEventListener('mousedown', (e) => {
      this.isPainting = true;
      this.startX = e.clientX;
      this.startY = e.clientY;
    });

    this.canvasTarget.addEventListener('mousemove', e => {
      if (!this.isPainting) {
        return;
      }
      this.canvasTarget.getContext('2d').lineWidth = 5;
      this.canvasTarget.getContext('2d').lineCap = 'round';
      this.canvasTarget.getContext('2d').lineTo(e.clientX - this.canvasTarget.canvasOffsetX, e.clientY);
      this.canvasTarget.getContext('2d').stroke();
    });


    this.canvasTarget.addEventListener('mouseup', () => {
      this.isPainting = false;
      this.canvasTarget.getContext('2d').stroke();
      this.canvasTarget.getContext('2d').beginPath();
    })
  }

  clear(e) {
    this.canvasTarget.getContext('2d').clearRect(0, 0, this.canvasTarget.width, this.canvasTarget.height);
  }

  toText() {
    // const text = await work(canvas)
    // console.log(text)
  }


}
