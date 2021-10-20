import AbstractComponent from "./abstract-component";


class Loader extends AbstractComponent {
  constructor() {
    super();

    this._pin = this.getElement().querySelector(`.loader__pin`);
    this._req = null;
    this._deg = 0;

    this._reset();
  }

  startAnimation() {
    this._pin.style.display = ``;

    const step = () => {
      this._deg = this._deg === 360 ? 0 : this._deg + 5;
      this._pin.style.transform = `rotateY(${this._deg}deg)`;
      this._req = requestAnimationFrame(step);
    };

    this._req = requestAnimationFrame(step);
  }

  stopAnimation() {
    if (this._req !== null) {
      cancelAnimationFrame(this._req);
    }
    this._reset();
  }

  _reset() {
    this._pin.style.display = `none`;
    this._pin.style.transform = ``;
    this._req = null;
    this._deg = 0;
  }

  _getTemplate() {
    return `<div class="loader"><div class="loader__pin"></div></div>`;
  }
}


export default Loader;
