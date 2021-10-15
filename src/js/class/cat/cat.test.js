import Cat from "./cat";

describe(`Class Cat should work correctly`, () => {
  it(`methods should work correctly`, () => {
    const cat = new Cat();
    expect(cat.say()).toBe(`Мяу`);
    expect(cat.hunt()).toBe(`Животное охотится`);
  });
});
