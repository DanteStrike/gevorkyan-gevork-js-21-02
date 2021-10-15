import Animal from "../animal/animal";

const Dog = () => {
  const self = {
    say() {
      return `Гав`;
    }
  };

  Object.setPrototypeOf(self, new Animal());
  Object.defineProperties(self, {
    say: {
      enumerable: false,
      writable: false,
      configurable: false
    }
  });

  return self;
};

export default Dog;
