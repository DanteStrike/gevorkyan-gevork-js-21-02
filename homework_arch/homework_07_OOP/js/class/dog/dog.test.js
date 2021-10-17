import Dog from "./dog";

describe(`Class Dog should work correctly`, () => {
  it(`methods should work correctly`, () => {
    const dog = new Dog();
    expect(dog.say()).toBe(`Гав`);
  });
});
