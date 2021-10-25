import AbstractComponent from "./abstract-component";


class People extends AbstractComponent {
  private readonly name: string;
  private readonly height: number;
  private readonly mass: number;
  private readonly gender: string;

  constructor({name = `unknown`, height = -1, mass = -1, gender = `unknown`}) {
    super();

    this.name = name;
    this.height = height;
    this.mass = mass;
    this.gender = gender;
  }

  protected getTemplate(): string {
    return `<li class="people">
              <p class="people__prop people__prop--name">${this.name}</p>
              <p class="people__prop people__prop--height">${this.height}</p>
              <p class="people__prop people__prop--mass">${this.mass}</p>
              <p class="people__prop people__prop--gender">${this.gender}</p>
            </li>`;
  }
}


export default People;
