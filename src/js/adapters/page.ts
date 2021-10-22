import People from "./people";
import {IPage, IPeople, Nullable, PageData} from "../types";


class Page implements IPage {
  prev: Nullable<number>;
  next: Nullable<number>;
  peoples: Array<IPeople>;

  constructor(data: PageData) {
    this.prev = Page.getPageNum(data[`previous`]);
    this.next = Page.getPageNum(data[`next`]);
    this.peoples = People.parsePeoples(data[`results`]);
  }

  get cur(): number {
    if (this.prev === null && this.next !== null) {
      return this.next - 1;
    }

    if (this.prev !== null && this.next === null) {
      return this.prev + 1;
    }

    if (this.prev !== null && this.next !== null) {
      return this.prev + 1;
    }

    return -1;
  }

  static parsePage(data: PageData): IPage {
    return new Page(data);
  }

  static defaultPage(): IPage {
    return new Page({
      previous: null,
      next: null,
      results: []
    });
  }

  private static getPageNum(str: Nullable<string>): Nullable<number> {
    if (str === null) {
      return null;
    }
    const res = str.match(/(?<=page=)[0-9]+/);

    return (res === null) ? null : Number(res);
  }
}


export default Page;
