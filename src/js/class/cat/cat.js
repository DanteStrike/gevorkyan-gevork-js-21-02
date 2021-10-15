import Animal from "../animal/animal";

class Cat extends Animal {
  constructor() {
    super();

    if (new.target === Cat) {
      Object.seal(this);
    }
  }

  say() {
    return `Мяу`;
  }

  hunt() {
    return `${this.name} охотится`;
  }
}

export default Cat;
