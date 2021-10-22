import {IPeople, PeopleData, PeoplesData} from "../types";


class People implements IPeople {
  name: string;
  height: number;
  mass: number;
  gender: string;

  constructor(data: PeopleData) {
    this.name = data[`name`];
    this.height = People.fixNum(data[`height`]);
    this.mass = People.fixNum(data[`mass`]);
    this.gender = data[`gender`];
  }

  static parsePeoples(peoples: PeoplesData): Array<IPeople> {
    return peoples.map((people: PeopleData): IPeople => new People(people));
  }

  private static fixNum(str: string): number {
    const num = Number(str.replace(`,`, `.`));
    if (!Number.isNaN(num)) {
      return num;
    }

    return -1;
  }
}


export default People;
