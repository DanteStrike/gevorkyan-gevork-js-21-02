import {createElement} from "../utils/dom";
import {ElementType} from "../utils/enum";
import AbstractComponent from "./abstract-component";


class Contact extends AbstractComponent {
  constructor({id, name, phone, onContactDelete}) {
    super();

    this._id = id;
    this._name = name;
    this._phone = phone;

    this._deleteBtn = this.getElement().querySelector(`.contact__delete-btn`);

    this._onContactDelete = onContactDelete;
    this._initHandlers();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this._getTemplate(), ElementType.TABLE);
    }

    return this._element;
  }

  _initHandlers() {
    this._deleteBtn.addEventListener(`click`, (evt) => this._onDeleteBtnClick(evt));
  }

  _onDeleteBtnClick() {
    this._onContactDelete(this._id);
  }

  _getTemplate() {
    return `<tr class="contacts__contact contact">
              <td class="contact__id">${this._id}</td>
              <td class="contact__name">${this._name}</td>
              <td class="contact__phone">${this._phone}</td>
              <td class="contact__delete">
                <button class="contact__delete-btn" type="button">X</button>
              </td>
            </tr>`;
  }
}


export default Contact;
