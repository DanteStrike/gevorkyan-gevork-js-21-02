class ImgBB {
  constructor(data) {
    this.id = data[`id`];
    this.title = data[`title`];
    this.url = data[`url`];
  }

  static parseImg(data) {
    return new ImgBB(data);
  }
}

export default ImgBB;
