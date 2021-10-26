import Animal from "../animal/animal";

function Parrot() {
  const self = this;
  Animal.call(self);

  self.say = function () {
    return `Криии`;
  };
  Object.defineProperty(self, `say`, {
    configurable: false,
    writable: false
  });
}

Object.setPrototypeOf(Parrot, Animal);
Object.defineProperties(Parrot, {
  say: {
    enumerable: false,
    writable: false,
    configurable: false
  }
});

export default Parrot;
