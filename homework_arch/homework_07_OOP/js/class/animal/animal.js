class Animal {
  constructor() {
    this.__name = `Животное`;

    Object.defineProperty(this, `__name`, {enumerable: false, configurable: false});
    if (new.target === Animal) {
      Object.seal(this);
    }
  }

  set name(newName) {
    this.__name = newName;
  }

  get name() {
    return this.__name;
  }

  eat() {
    return `${this.name} ест`;
  }

  say() {
    return `Неизвестное животное молчит`;
  }

  rename(newName) {
    const re = /^[а-я\s\-]*$/gmi;
    if (re.test(newName)) {
      this.name = newName;
    } else {
      throw new Error(`Новая кличка должна содержать только кирилические символы, пробелы или символ "-"`);
    }
  }
}

export default Animal;
