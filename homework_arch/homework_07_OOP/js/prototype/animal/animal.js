const Animal = () => {
  const self = {
    __name: `Животное`,

    get name() {
      return this.__name;
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
        this.__name = newName;
      } else {
        throw new Error(`Новая кличка должна содержать только кирилические символы, пробелы или символ "-"`);
      }
    }
  };

  Object.defineProperties(self, {
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

  return self;
};

export default Animal;
