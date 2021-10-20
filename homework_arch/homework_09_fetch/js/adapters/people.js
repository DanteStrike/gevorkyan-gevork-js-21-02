class People {
  constructor(data) {
    this.name = data[`name`];
    this.height = People.fixNum(data[`height`]);
    this.mass = People.fixNum(data[`mass`]);
    this.gender = data[`gender`];
  }

  static fixNum(str) {
    if (str === undefined) {
      return ``;
    }

    const num = Number(str.replace(`,`, `.`));
    if (!Number.isNaN(num)) {
      return num;
    }

    return -1;
  }

  static parsePeoples(peoplesData) {
    return peoplesData.map((peopleData) => new People(peopleData));
  }
}


export default People;
