const Animal = {
  __name: `Животное`,

  get name() {
    return this.__name;
  },

  set name(newName) {
    this.__name = newName;
  },

  eat() {
    return `${this.__name} ест`;
  },

  say() {
    return `Неизвестное животное молчит`;
  },

  rename(newName) {
    const re = /^[а-я\s\-]*$/gmi;
    if (re.test(newName)) {
      this.name = newName;
    } else {
      throw new Error(`Новая кличка должна содержать только кирилические символы, пробелы или символ "-"`);
    }
  }
};

Object.defineProperties(Animal, {
  __name: {
    enumerable: false,
    configurable: false
  },
  name: {
    configurable: false
  },
  eat: {
    enumerable: false,
    writable: false,
    configurable: false
  },
  say: {
    enumerable: false,
    writable: false,
    configurable: false
  },
  rename: {
    enumerable: false,
    writable: false,
    configurable: false
  }
});

export default Animal;
