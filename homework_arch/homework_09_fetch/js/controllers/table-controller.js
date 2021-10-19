import Table from "../components/table";
import SortView from "../components/sort-view";
import People from "../components/people";
import Navigation from "../components/navigation";
import LoadingView from "../components/loading-view";
import {render, unmount} from "../utils/dom";
import {Position, Sort} from "../utils/enum";


class TableController {
  constructor(container, onPageChange) {
    this._container = container;
    this._onPageChange = onPageChange;
    this._page = {};

    this._table = new Table();

    this._sortType = Sort.Type.NAME;
    this._sortMod = Sort.Mod.DOWN;
    this._sortView = new SortView(this._sortType, this._onSortTypeChange.bind(this));

    this._nav = new Navigation(null, this._onNavPrevClick.bind(this), this._onNavNextClick.bind(this));

    this._loadView = new LoadingView();

    this._init();
  }

  setPage(page) {
    this._page = page;
    this._nav.navNum = this._page.cur;
    this.loadingModOFF();

    this._sort();
    this._update();
  }

  loadingModOFF() {
    if (this._page.prev !== null) {
      this._nav.enablePrevButton();
    }
    if (this._page.next !== null) {
      this._nav.enableNextButton();
    }

    unmount(this._loadView.getElement());
    this._table.unBlock();
  }

  _init() {
    render(this._container, this._table.getElement(), Position.AFTERBEGIN);
    render(this._table.getElement(), this._sortView.getElement(), Position.AFTERBEGIN);
    render(this._table.getElement(), this._nav.getElement(), Position.BEFOREEND);

    this._loadingModON();
  }

  _onSortTypeChange(newType) {
    if (this._sortType === newType) {
      this._toggleSortMod();
    } else {
      this._sortType = newType;
    }

    this._sort();
    this._update();
  }

  _toggleSortMod() {
    if (this._sortMod === Sort.Mod.UP) {
      this._sortMod = Sort.Mod.DOWN;
      return;
    }

    this._sortMod = Sort.Mod.UP;
  }

  _sort() {
    this._page.peoples.sort((a, b) => {
      if (typeof a[this._sortType] === `number`) {
        return a[this._sortType] - b[this._sortType];
      }

      const strA = a[this._sortType].toLowerCase();
      const strB = b[this._sortType].toLowerCase();
      if (strA > strB) {
        return 1;
      }
      if (strA < strB) {
        return -1;
      }
      return 0;
    });

    if (this._sortMod === Sort.Mod.UP) {
      this._page.peoples.reverse();
    }
  }

  _loadingModON() {
    this._nav.disableNextButton();
    this._nav.disablePrevButton();
    render(this._table.getElement(), this._loadView.getElement(), Position.AFTERBEGIN);
    this._table.block();
  }

  _onNavPrevClick() {
    if (this._page.prev === null) {
      return;
    }

    this._loadingModON();
    this._onPageChange(this._page.prev);
  }

  _onNavNextClick() {
    if (this._page.next === null) {
      return;
    }

    this._loadingModON();
    this._onPageChange(this._page.next);
  }

  _update() {
    this._table.tableList.innerHTML = ``;
    this._page.peoples.forEach((people) => {
      render(this._table.tableList, new People(people).getElement(), Position.BEFOREEND);
    });
  }
}


export default TableController;
