import Animal from "../animal/animal";

const Dog = {
  say() {
    return `Гав`;
  }
};

Object.setPrototypeOf(Dog, Animal);
Object.defineProperties(Dog, {
  say: {
    enumerable: false,
    writable: false,
    configurable: false
  }
});

export default Dog;
