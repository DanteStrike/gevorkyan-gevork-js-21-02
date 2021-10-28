import AbstractComponent from "./abstract-component";

class ImgList extends AbstractComponent {
  constructor() {
    super();
  }

  _getTemplate() {
    return `<ul class="img-list work-area__img-list"></ul>`;
  }
}

export default ImgList;
