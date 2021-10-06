function Mutant() {
  this.setProp = (key, value, opt) => {
    const defaultDescriptor = {
      value: undefined,
      writable: true,
      configurable: true,
      enumerable: true
    };

    Object.defineProperty(this, key, Object.assign(defaultDescriptor, {value}, opt));
  };
}

export default Mutant;
