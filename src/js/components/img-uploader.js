import AbstractComponent from "./abstract-component";
import {TagName} from "../enum/enum";

class ImgUploader extends AbstractComponent {
  constructor({onImageSubmit = () => {}}) {
    super();

    this._onImageSubmit = onImageSubmit;
    this._inputName = this.getElement().querySelector(`#img-uploader__input-name`);
    this._inputImg = this.getElement().querySelector(`#img-uploader__input-img`);
    this.getElement().addEventListener(`click`, (evt) => this._onFormClick(evt));
  }

  block() {
    this.getElement().classList.add(`img-uploader--block`);
  }

  unBlock() {
    this.getElement().classList.remove(`img-uploader--block`);
  }

  _onFormClick(evt) {
    const form = evt.currentTarget;
    const target = evt.target;

    if (target.nodeName !== TagName.BUTTON) {
      return;
    }

    if (!form.reportValidity()) {
      return;
    }

    evt.preventDefault();
    const formData = new FormData(form);
    this._onImageSubmit(formData);
    this._inputName.value = ``;
    this._inputImg.value = ``;
  }

  _getTemplate() {
    return `<form class="img-uploader work-area__img-uploader" method="post" action="#">
                <label class="img-uploader__label" for="img-uploader__input-name">Название изображения ([a-zA-Z0-9]):</label>
                <input class="img-uploader__input" type="text" id="img-uploader__input-name" name="name" pattern="^[a-zA-Z0-9]+$">
                <label class="img-uploader__label" for="img-uploader__input-img">Выберите изборажение:</label>
                <input class="img-uploader__input" type="file" id="img-uploader__input-img" name="image" accept="image/*" required>
                <button class="img-uploader__btn" type="submit">Отправить</button>
              </form>`;
  }
}


export default ImgUploader;
