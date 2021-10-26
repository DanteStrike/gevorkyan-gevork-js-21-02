import Animal from "../animal/animal";

function Dog() {
  const self = this;
  Animal.call(self);

  self.say = function () {
    return `Гав`;
  };
  Object.defineProperty(self, `say`, {
    configurable: false,
    writable: false
  });
}

export default Dog;
