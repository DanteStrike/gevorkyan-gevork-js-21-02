import AbstractComponent from "./abstract-component";

class Contacts extends AbstractComponent {
  constructor({borderColor, backgroundColor, fontColor}) {
    super();

    this.borderColor = borderColor;
    this.backgroundColor = backgroundColor;
    this.fontColor = fontColor;
    this._contactsList = this.getElement().querySelector(`.contacts__body`);
  }

  get contactsList() {
    return this._contactsList;
  }

  set borderColor(color) {
    this.getElement().style.borderColor = color;
  }

  set backgroundColor(color) {
    this.getElement().style.backgroundColor = color;
  }

  set fontColor(color) {
    this.getElement().style.color = color;
  }

  _getTemplate() {
    return `<table class="table__contacts contacts">
          <thead>
            <tr>
              <th class="contacts__header contacts__header--id">ID</th>
              <th class="contacts__header contacts__header--name">Name</th>
              <th class="contacts__header contacts__header--phone">Phone</th>
              <th class="contacts__header contacts__header--control">Control</th>
            </tr>
          </thead>
          <tbody class="contacts__body">

          </tbody>
        </table>`;
  }
}


export default Contacts;
