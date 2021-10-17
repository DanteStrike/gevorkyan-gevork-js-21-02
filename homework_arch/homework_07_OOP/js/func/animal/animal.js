function Animal() {
  const self = this;
  let __name = `Животное`;

  self.getName = function () {
    return __name;
  };
  Object.defineProperty(self, `getName`, {
    enumerable: false,
    configurable: false,
    writable: false
  });

  self.setName = function (newName) {
    __name = newName;
  };
  Object.defineProperty(self, `setName`, {
    enumerable: false,
    configurable: false,
    writable: false
  });

  self.eat = function () {
    return `${this.getName()} ест`;
  };
  Object.defineProperty(self, `eat`, {
    enumerable: false,
    configurable: false,
    writable: false
  });

  self.say = function () {
    return `Неизвестное животное молчит`;
  };
  Object.defineProperty(this, `say`, {
    enumerable: false
  });

  self.rename = function (newName) {
    const re = /^[а-я\s\-]*$/gmi;
    if (re.test(newName)) {
      this.setName(newName);
    } else {
      throw new Error(`Новая кличка должна содержать только кирилические символы, пробелы или символ "-"`);
    }
  };
  Object.defineProperty(self, `rename`, {
    enumerable: false,
    configurable: false,
    writable: false
  });
}

export default Animal;
