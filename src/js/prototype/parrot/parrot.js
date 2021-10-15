import Animal from "../animal/animal";

const Parrot = () => {
  const self = {
    say() {
      return `Криии`;
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

export default Parrot;
