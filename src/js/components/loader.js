import AbstractComponent from "./abstract-component";


class Loader extends AbstractComponent {
  constructor() {
    super();
  }

  _getTemplate() {
    return `<div class="loader"><div class="loader__pin"></div></div>`;
  }
}


export default Loader;
