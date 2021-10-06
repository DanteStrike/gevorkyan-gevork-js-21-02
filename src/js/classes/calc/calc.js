function Calc() {
  this.__curVal = 0;

  this.setVal = (newVal) => {
    if (this.__checkIsNaN(newVal)) {
      return this;
    }

    this.__curVal = newVal;
    return this;
  };

  this.getVal = () => {
    return this.__curVal;
  };

  this.reset = () => {
    this.__curVal = 0;
    return this;
  };

  this.sum = (num) => {
    if (this.__checkIsNaN(num)) {
      return this;
    }

    this.__curVal += num;
    return this;
  };

  this.minus = (num) => {
    if (this.__checkIsNaN(num)) {
      return this;
    }

    this.__curVal -= num;
    return this;
  };

  this.div = (num) => {
    if (this.__checkIsNaN(num)) {
      return this;
    }

    this.__curVal /= num;
    return this;
  };

  this.multiply = (num) => {
    if (this.__checkIsNaN(num)) {
      return this;
    }

    this.__curVal *= num;
    return this;
  };

  this.__checkIsNaN = (num) => {
    const isNaN = !Number.isFinite(num);

    if (isNaN) {
      this.__curVal = NaN;
    }

    return isNaN;
  };
}

export default Calc;
