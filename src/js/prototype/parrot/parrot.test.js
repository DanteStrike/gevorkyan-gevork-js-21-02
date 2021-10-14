import Parrot from "./parrot";

describe(`Obj Parrot should work correctly`, () => {
  it(`methods should work correctly`, () => {
    const parrot = Parrot;
    expect(parrot.say()).toBe(`Криии`);
    expect(Object.getOwnPropertyDescriptor(parrot, `say`)).toMatchObject({
      enumerable: false,
      writable: false,
      configurable: false
    });
  });
});
