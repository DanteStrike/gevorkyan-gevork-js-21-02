import Dog from "./dog";

describe(`Obj Dog should work correctly`, () => {
  it(`methods should work correctly`, () => {
    const dog = Dog;
    expect(dog.say()).toBe(`Гав`);
    expect(Object.getOwnPropertyDescriptor(dog, `say`)).toMatchObject({
      enumerable: false,
      writable: false,
      configurable: false
    });
  });
});
