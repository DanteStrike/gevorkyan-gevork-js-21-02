import AbstractComponent from "./abstract-component";

class ImgItem extends AbstractComponent {
  constructor({url = `https://via.placeholder.com/260x200`, title = `image`}) {
    super();

    this._url = url;
    this._title = title;
  }

  _getTemplate() {
    return `<li class="img-list__item">
              <img class="image" src="${this._url}" alt="${this._title}" width="260" height="200">
            </li>`;
  }
}

export default ImgItem;
