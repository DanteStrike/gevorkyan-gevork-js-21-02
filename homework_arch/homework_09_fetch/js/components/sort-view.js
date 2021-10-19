import AbstractComponent from "./abstract-component";
import {TagName} from "../utils/enum";


class SortView extends AbstractComponent {
  constructor(sortType, onSortTypeChange = () => {}) {
    super();

    this._sortType = sortType;
    this._onSortTypeChange = onSortTypeChange;

    this.getElement().querySelector(`[data-sort-type="${this._sortType}"]`).checked = true;
    this.getElement().addEventListener(`click`, (evt) => this._onSortFormClick(evt));
  }

  _onSortFormClick(evt) {
    const target = evt.target;

    if (target.nodeName !== TagName.LABEL) {
      return;
    }

    const input = evt.currentTarget.querySelector(`#${target.htmlFor}`);
    this._sortType = input.dataset.sortType;
    this._onSortTypeChange(input.dataset.sortType);
  }

  _getTemplate() {
    return `<form class="table__sort sort" method="get" action="#">
                  <div class="sort__item">
                    <input class="sort__input visually-hidden" id="sort-name" type="radio" name="sort" value="sort-name" data-sort-type="name">
                    <label class="sort__label" for="sort-name">Name</label>
                  </div>

                  <div class="sort__item">
                    <input class="sort__input visually-hidden" id="sort-height" type="radio" name="sort" value="sort-height" data-sort-type="height">
                    <label class="sort__label" for="sort-height">Height</label>
                  </div>

                  <div class="sort__item">
                    <input class="sort__input visually-hidden" id="sort-mass" type="radio" name="sort" value="sort-mass" data-sort-type="mass">
                    <label class="sort__label" for="sort-mass">Mass</label>
                  </div>

                  <div class="sort__item">
                    <input class="sort__input visually-hidden" id="sort-gender" type="radio" name="sort" value="sort-gender" data-sort-type="gender">
                    <label class="sort__label" for="sort-gender">Gender</label>
                  </div>
                </form>`;
  }
}


export default SortView;
