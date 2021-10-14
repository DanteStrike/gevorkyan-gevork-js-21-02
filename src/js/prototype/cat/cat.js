import Animal from "../animal/animal";

const Cat = {
  say() {
    return `Мяу`;
  },

  hunt() {
    return `${this.name} охотится`;
  },
};

Object.setPrototypeOf(Cat, Animal);
Object.defineProperties(Cat, {
  say: {
    enumerable: false,
    writable: false,
    configurable: false
  },
  hunt: {
    enumerable: false,
    writable: false,
    configurable: false
  }
});

export default Cat;
