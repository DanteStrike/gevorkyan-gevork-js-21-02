import Parrot from "./parrot";

describe(`FUNC Parrot should work correctly`, () => {
  it(`methods should work correctly`, () => {
    const parrot = new Parrot();
    expect(parrot.say()).toBe(`Криии`);
    expect(Object.getOwnPropertyDescriptor(parrot, `say`)).toMatchObject({
      enumerable: false,
      writable: false,
      configurable: false
    });
  });
});
