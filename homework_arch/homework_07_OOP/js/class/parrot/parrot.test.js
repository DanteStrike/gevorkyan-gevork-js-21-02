import Parrot from "./parrot";

describe(`Class Parrot should work correctly`, () => {
  it(`methods should work correctly`, () => {
    const parrot = new Parrot();
    expect(parrot.say()).toBe(`Криии`);
  });
});
