import AbstractComponent from "./abstract-component";
import {ITable} from "../types";
import {safeQuery} from "../utils/dom";


class Table extends AbstractComponent implements ITable {
  constructor() {
    super();
  }

  get tableList() {
    return safeQuery(this.getElement(), `.table__peoples`);
  }

  block(): void {
    this.getElement().classList.add(`table--loading`);
  }

  unblock(): void {
    this.getElement().classList.remove(`table--loading`);
  }

  protected getTemplate(): string {
    return `<section class="table">
              <ul class="table__peoples"></ul>
            </section>`;
  }
}


export default Table;
