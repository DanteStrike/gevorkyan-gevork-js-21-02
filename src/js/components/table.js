import AbstractComponent from "./abstract-component";


class Table extends AbstractComponent {
  constructor() {
    super();
  }

  _getTemplate() {
    return `<section class="table">
        <h2 class="table__title">Контакты</h2>

      </section>`;
  }
}


export default Table;
