import People from "./people";


class Page {
  constructor(data) {
    this.prev = Page.getPageNum(data[`previous`]);
    this.next = Page.getPageNum(data[`next`]);
    this.peoples = People.parsePeoples(data[`results`]);

    this.cur = this.prev === null ? this.next - 1 : this.prev + 1;
  }

  static getPageNum(str) {
    if (str === null) {
      return null;
    }

    return Number(str.match(/(?<=page=)[0-9]+/)[0]);
  }

  static parsePage(pageData) {
    return new Page(pageData);
  }
}


export default Page;
