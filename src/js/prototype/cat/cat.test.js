import Cat from "./cat";

describe(`Obj Cat should work correctly`, () => {
  it(`methods should work correctly`, () => {
    const cat = new Cat();
    expect(cat.say()).toBe(`Мяу`);
    expect(cat.hunt()).toBe(`Животное охотится`);
    expect(Object.getOwnPropertyDescriptor(cat, `say`)).toMatchObject({
      enumerable: false,
      writable: false,
      configurable: false
    });
    expect(Object.getOwnPropertyDescriptor(cat, `hunt`)).toMatchObject({
      enumerable: false,
      writable: false,
      configurable: false
    });
  });
});
