import AbstractComponent from "./abstract-component";


class Table extends AbstractComponent {
  constructor() {
    super();
  }

  get tableList() {
    return this.getElement().querySelector(`.table__peoples`);
  }

  block() {
    this.getElement().classList.add(`table--loading`);
  }

  unBlock() {
    this.getElement().classList.remove(`table--loading`);
  }

  _getTemplate() {
    return `<section class="table">
                <ul class="table__peoples"></ul>
              </section>`;
  }
}


export default Table;
