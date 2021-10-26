import AbstractComponent from "./abstract-component";


class People extends AbstractComponent {
  constructor({name, height, mass, gender}) {
    super();

    this._name = name;
    this._height = height;
    this._mass = mass;
    this._gender = gender;
  }

  _getTemplate() {
    return `<li class="people">
                    <p class="people__prop people__prop--name">${this._name}</p>
                    <p class="people__prop people__prop--height">${this._height}</p>
                    <p class="people__prop people__prop--mass">${this._mass}</p>
                    <p class="people__prop people__prop--gender">${this._gender}</p>
                  </li>`;
  }
}


export default People;
