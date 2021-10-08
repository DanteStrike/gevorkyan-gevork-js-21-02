function Viewer(obj = {}) {
  this.obj = Object.assign({}, obj);

  this.print = () => {
    const result = Object
      .entries(this.obj)
      .map(([key, val]) => `${key}: ${val}`)
      .join(`,`);
    // eslint-disable-next-line no-console
    console.log(result);
    return result;
  };

  Object.defineProperty(this, `print`, {enumerable: false});
}

export default Viewer;
