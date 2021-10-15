import Animal from "../animal/animal";

class Dog extends Animal {
  constructor() {
    super();

    if (new.target === Dog) {
      Object.seal(this);
    }
  }

  say() {
    return `Гав`;
  }
}

export default Dog;
