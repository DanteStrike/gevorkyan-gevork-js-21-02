import Table from "../components/table";
import SortView from "../components/sort-view";
import People from "../components/people";
import Navigation from "../components/navigation";
import LoadingView from "../components/loading-view";
import {render, unmount} from "../utils/dom";
import {INavigation, IPage, IPeople, ITable, ITableController, Position, SortMod, SortType} from "../types";
import Page from "../adapters/page";


class TableController implements ITableController {
  private readonly table: ITable;
  private readonly sortView: SortView;
  private readonly nav: INavigation;
  private readonly loadView: LoadingView;

  private page: IPage;
  private sortType: SortType;
  private sortMod: SortMod;

  constructor(
    private readonly container: HTMLElement,
    private readonly onPageChange: (pageNum: number) => void
  ) {
    this.page = Page.defaultPage();
    this.table = new Table();
    this.sortType = SortType.NAME;
    this.sortMod = SortMod.DOWN;
    this.sortView = new SortView({
      sortType: this.sortType,
      onSortTypeChange: this.onSortTypeChange.bind(this)
    });
    this.nav = new Navigation({
      num: -1,
      onPrevBtnClick: this.onNavPrevClick.bind(this),
      onNextBtnClick: this.onNavNextClick.bind(this)
    });
    this.loadView = new LoadingView();

    this.init();
  }

  setPage(page: IPage): void {
    this.page = page;
    this.nav.curNum = this.page.cur;
    this.loadingModOFF();
    this.sort();
    this.update();
  }

  loadingModOFF(): void {
    if (this.page.prev !== null) {
      this.nav.enablePrevButton();
    }
    if (this.page.next !== null) {
      this.nav.enableNextButton();
    }

    unmount(this.loadView.getElement());
    this.table.unblock();
  }

  private init(): void {
    render(this.container, this.table.getElement(), Position.AFTERBEGIN);
    render(this.table.getElement(), this.sortView.getElement(), Position.AFTERBEGIN);
    render(this.table.getElement(), this.nav.getElement(), Position.BEFOREEND);

    this.loadingModON();
  }

  private onSortTypeChange(newType: SortType): void {
    if (this.sortType === newType) {
      this.toggleSortMod();
    } else {
      this.sortType = newType;
    }

    this.sort();
    this.update();
  }

  private toggleSortMod(): void {
    if (this.sortMod === SortMod.UP) {
      this.sortMod = SortMod.DOWN;
      return;
    }

    this.sortMod = SortMod.UP;
  }

  private sort(): void {
    this.page.peoples.sort((a: IPeople, b: IPeople): number => {
      let left: number | string;
      let right: number | string;

      switch (this.sortType) {
        case SortType.NAME:
          left = a.name.toLowerCase();
          right = b.name.toLowerCase();
          break;

        case SortType.GENDER:
          left = a.gender.toLowerCase();
          right = b.gender.toLowerCase();
          break;

        case SortType.HEIGHT:
          left = a.height;
          right = b.height;
          break;

        case SortType.MASS:
          left = a.mass;
          right = b.mass;
          break;
      }

      if (left > right) {
        return 1;
      }
      if (left < right) {
        return -1;
      }
      return 0;
    });

    if (this.sortMod === SortMod.UP) {
      this.page.peoples.reverse();
    }
  }

  private loadingModON(): void {
    this.nav.disableNextButton();
    this.nav.disablePrevButton();
    render(this.table.getElement(), this.loadView.getElement(), Position.AFTERBEGIN);
    this.table.block();
  }

  private onNavPrevClick(): void {
    if (this.page.prev === null) {
      return;
    }

    this.loadingModON();
    this.onPageChange(this.page.prev);
  }

  private onNavNextClick(): void {
    if (this.page.next === null) {
      return;
    }

    this.loadingModON();
    this.onPageChange(this.page.next);
  }

  private update(): void {
    this.table.tableList.innerHTML = ``;
    this.page.peoples.forEach((people) => {
      render(this.table.tableList, new People(people).getElement(), Position.BEFOREEND);
    });
  }
}


export default TableController;
