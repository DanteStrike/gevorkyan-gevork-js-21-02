import * as AnimalObj from "./prototype/animal/animal";
import * as CatObj from "./prototype/cat/cat";
import * as DogObj from "./prototype/dog/dog";
import * as ParrotObj from "./prototype/parrot/parrot";

import * as AnimalConstructor from "./func/animal/animal";
import * as CatConstructor from "./func/cat/cat";
import * as DogConstructor from "./func/dog/dog";
import * as ParrotConstructor from "./func/parrot/parrot";

import * as AnimalClass from "./class/animal/animal";
import * as CatClass from "./class/cat/cat";
import * as DogClass from "./class/dog/dog";
import * as ParrotClass from "./class/parrot/parrot";

window.tasks = {
  prototype: {
    Animal: AnimalObj.default,
    Cat: CatObj.default,
    Dog: DogObj.default,
    parrot: ParrotObj.default
  },

  func: {
    Animal: AnimalConstructor.default,
    Cat: CatConstructor.default,
    Dog: DogConstructor.default,
    Parrot: ParrotConstructor.default
  },

  class: {
    Animal: AnimalClass.default,
    Cat: CatClass.default,
    Dog: DogClass.default,
    Parrot: ParrotClass.default
  }
};
