import AbstractComponent from "./abstract-component";
import {SortType, TagName} from "../types";
import {safeQuery} from "../utils/dom";


class SortView extends AbstractComponent {
  private sortType: SortType;
  private readonly onSortTypeChange: (type: SortType) => void;

  constructor({sortType, onSortTypeChange}: {sortType: SortType, onSortTypeChange: (type: SortType) => void}) {
    super();

    this.sortType = sortType;
    this.onSortTypeChange = onSortTypeChange;

    const curRadioButton = safeQuery(this.getElement(), `[data-sort-type="${this.sortType}"]`) as HTMLInputElement;
    curRadioButton.checked = true;

    this.getElement().addEventListener(`click`, (evt: MouseEvent) => this.onSortFormClick(evt));
  }

  private onSortFormClick(evt: MouseEvent): void {
    const target = evt.target as HTMLLabelElement;

    if (target.nodeName !== TagName.LABEL) {
      return;
    }

    const input = safeQuery(this.getElement(), `#${target.htmlFor}`) as HTMLInputElement;
    this.sortType = input.dataset.sortType as SortType;
    this.onSortTypeChange(this.sortType);
  }

  protected getTemplate(): string {
    return `<form class="table__sort sort" method="get" action="#">
              <div class="sort__item">
                <input class="sort__input visually-hidden" id="sort-name" type="radio" name="sort" value="NAME" data-sort-type="NAME">
                <label class="sort__label" for="sort-name">Name</label>
              </div>

              <div class="sort__item">
                <input class="sort__input visually-hidden" id="sort-height" type="radio" name="sort" value="HEIGHT" data-sort-type="HEIGHT">
                <label class="sort__label" for="sort-height">Height</label>
              </div>

              <div class="sort__item">
                <input class="sort__input visually-hidden" id="sort-mass" type="radio" name="sort" value="MASS" data-sort-type="MASS">
                <label class="sort__label" for="sort-mass">Mass</label>
              </div>

              <div class="sort__item">
                <input class="sort__input visually-hidden" id="sort-gender" type="radio" name="sort" value="GENDER" data-sort-type="GENDER">
                <label class="sort__label" for="sort-gender">Gender</label>
              </div>
            </form>`;
  }
}


export default SortView;
