import { Controller } from "@hotwired/stimulus"
import { ocr } from 'ocr'
import { work } from 'worker'

export default class extends Controller {

  static targets = ['canvas', 'message'];

  initialize() {
    ocr()
  }

  clear(e) {
    this.canvasTarget.getContext('2d').clearRect(0, 0, this.canvasTarget.width, this.canvasTarget.height);
    this.messageTarget.innerText = ''
  }

  async toText() {
    const text = await work(this.canvasTarget)
    this.messageTarget.innerText = text
    console.log(text)
  }

}
