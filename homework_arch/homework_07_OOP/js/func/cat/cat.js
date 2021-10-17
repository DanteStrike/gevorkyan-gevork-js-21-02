import Animal from "../animal/animal";

function Cat() {
  const self = this;
  Animal.call(self);

  self.say = function () {
    return `Мяу`;
  };
  Object.defineProperty(self, `say`, {
    configurable: false,
    writable: false
  });

  self.hunt = function () {
    return `${self.getName()} охотится`;
  };
  Object.defineProperty(self, `hunt`, {
    enumerable: false,
    configurable: false,
    writable: false
  });
}

export default Cat;
