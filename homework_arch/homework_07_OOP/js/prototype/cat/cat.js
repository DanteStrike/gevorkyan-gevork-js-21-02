import Animal from "../animal/animal";

const Cat = () => {
  const self = {
    say() {
      return `Мяу`;
    },

    hunt() {
      return `${this.name} охотится`;
    }
  };

  Object.setPrototypeOf(self, new Animal());
  Object.defineProperties(self, {
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

  return self;
};

export default Cat;
