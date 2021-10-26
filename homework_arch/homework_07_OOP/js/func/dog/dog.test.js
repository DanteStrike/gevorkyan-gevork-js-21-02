import Dog from "./dog";

describe(`FUNC Dog should work correctly`, () => {
  it(`methods should work correctly`, () => {
    const dog = new Dog();
    expect(dog.say()).toBe(`Гав`);
    expect(Object.getOwnPropertyDescriptor(dog, `say`)).toMatchObject({
      enumerable: false,
      writable: false,
      configurable: false
    });
  });
});
