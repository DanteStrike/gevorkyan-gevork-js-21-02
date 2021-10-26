import Animal from "../animal/animal";

class Parrot extends Animal {
  constructor() {
    super();

    if (new.target === Parrot) {
      Object.seal(this);
    }
  }

  say() {
    return `Криии`;
  }
}

export default Parrot;
