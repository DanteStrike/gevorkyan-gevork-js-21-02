import Animal from "../animal/animal";

const Parrot = {
  say() {
    return `Криии`;
  }
};

Object.setPrototypeOf(Parrot, Animal);
Object.defineProperties(Parrot, {
  say: {
    enumerable: false,
    writable: false,
    configurable: false
  }
});

export default Parrot;
