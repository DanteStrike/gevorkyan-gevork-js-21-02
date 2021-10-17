import {render} from "../utils/dom";
import {Position} from "../utils/enum";

import ContactAdd from "../components/contact-add";
import Config from "../components/config";
import Table from "../components/table";
import Contacts from "../components/contacts";
import Contact from "../components/contact";


class TableController {
  constructor({data, container}) {
    const defaultColors = {
      borderColor: `#DDDDDD`,
      backgroundColor: `#F5F5F5`,
      fontColor: `#141414`
    };

    this._data = data;
    this._container = container;
    this._table = new Table();

    const onNewContactAdd = this._onNewContactAdd.bind(this);
    this._contactAdd = new ContactAdd({onNewContactAdd});

    this._config = new Config({
      ...defaultColors,
      onBorderColorChange: this._onBorderColorChange.bind(this),
      onBackgroundColorChange: this._onBackgroundColorChange.bind(this),
      onFontColorChange: this._onFontColorChange.bind(this)
    });
    this._contacts = new Contacts(defaultColors);
  }

  init() {
    render(this._container, this._table.getElement(), Position.AFTERBEGIN);
    render(this._table.getElement(), this._contactAdd.getElement(), Position.AFTERBEGIN);
    render(this._table.getElement(), this._config.getElement(), Position.AFTERBEGIN);
    render(this._table.getElement(), this._contacts.getElement(), Position.AFTERBEGIN);

    this._sortByID();
    this._renderContacts();
  }

  _sortByID() {
    this._data = this._data.sort((a, b) => a.id > b.id);
  }

  _onBorderColorChange(color) {
    this._contacts.borderColor = color;
  }

  _onBackgroundColorChange(color) {
    this._contacts.backgroundColor = color;
  }

  _onFontColorChange(color) {
    this._contacts.fontColor = color;
  }

  _onNewContactAdd(name, phone) {
    this._data.push({
      id: this._data.length > 0 ? this._data[this._data.length - 1].id + 1 : 1,
      name,
      phone
    });

    this._updateList();
  }

  _onContactDelete(id) {
    const index = this._data.findIndex((contact) => contact.id === id);
    this._data = [...this._data.slice(0, index), ...this._data.slice(index + 1)];

    this._updateList();
  }

  _clearContacts() {
    this._contacts.contactsList.innerHTML = ``;
  }

  _renderContacts() {
    this._data.forEach((contact) => {
      render(this._contacts.contactsList, new Contact({
        ...contact,
        onContactDelete: (id) => this._onContactDelete(id)
      }).getElement(), Position.BEFOREEND);
    });
  }

  _updateList() {
    this._clearContacts();
    this._renderContacts();
  }
}


export default TableController;
