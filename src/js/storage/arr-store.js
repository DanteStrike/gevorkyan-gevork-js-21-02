class ArrStore {
  constructor({storage, key, initialData}) {
    this._storage = storage;
    this._key = key;
    this._data = this.isInStorage ?
      JSON.parse(this._storage.getItem(this._key))
      : this._storage.setItem(this._key, JSON.stringify(initialData));
  }

  get isInStorage() {
    return this._storage.getItem(this._key) !== null;
  }

  get data() {
    return this._data.map((obj) => Object.assign({}, obj));
  }

  push(data) {
    this._data.push(data);
    this._save();
  }

  _save() {
    this._storage.setItem(this._key, JSON.stringify(this._data));
  }
}

export default ArrStore;
