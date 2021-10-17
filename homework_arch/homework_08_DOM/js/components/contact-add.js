import AbstractComponent from "./abstract-component";


class ContactAdd extends AbstractComponent {
  constructor({onNewContactAdd}) {
    super();

    this._nameInput = this.getElement().querySelector(`#contact-add-name`);
    this._phoneInput = this.getElement().querySelector(`#contact-add-phone`);
    this._addButton = this.getElement().querySelector(`#contact-add-btn`);

    this._onNewContactAdd = onNewContactAdd;

    this._initHandlers();
  }

  get name() {
    return this._nameInput.value;
  }

  get phone() {
    return this._phoneInput.value;
  }

  _initHandlers() {
    this._addButton.addEventListener(`click`, (evt) => this._onAddButtonClick(evt));
  }

  _onAddButtonClick(evt) {
    evt.preventDefault();
    if (this.getElement().reportValidity()) {
      this._onNewContactAdd(this.name, this.phone);
      this.getElement().reset();
    }
  }

  _getTemplate() {
    return `<form class="table__contact-add contact-add" method="post" action="#">
          <h3 class="contact-add__title">Добавить контакт</h3>
          <label class="contact-add__label" for="contact-add-name">ФИО (Принимается только кирилица)
            <input
                class="contact-add__input"
                type="text"
                name="contact-add-name"
                id="contact-add-name"
                pattern="[а-яА-Я]*" required>
          </label>
          <label class="contact-add__label" for="contact-add-phone">Телефон (Формат телефона: +X (XXX) XXX-XX-XX)
            <input
                class="contact-add__input"
                type="text"
                name="contact-add-phone"
                id="contact-add-phone"
                pattern="^\\+[0-9] \\([0-9]{3}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}$" required>
          </label>
          <button class="contact-add__button" type="submit" id="contact-add-btn">Добавить</button>
        </form>`;
  }
}


export default ContactAdd;
