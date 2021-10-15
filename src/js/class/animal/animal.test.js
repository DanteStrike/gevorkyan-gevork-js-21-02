import Animal from "./animal";

describe(`Class Animal should work correctly`, () => {
  it(`props should work correctly`, () => {
    const animal = new Animal();
    expect(animal.name).toBe(`Животное`);
    expect(animal.__name).toBe(`Животное`);
    expect(Object.getOwnPropertyDescriptor(animal, `__name`)).toMatchObject({
      enumerable: false,
      configurable: false
    });
    animal.name = `Животное2`;
    expect(animal.name).toBe(`Животное2`);
  });

  it(`methods should work correctly`, () => {
    const animal = new Animal();
    expect(animal.eat()).toBe(`Животное ест`);
    expect(animal.say()).toBe(`Неизвестное животное молчит`);
    animal.rename(`Барсик`);
    expect(animal.name).toBe(`Барсик`);

    animal.rename(`   Т-Е-С--Т  `);
    expect(animal.name).toBe(`   Т-Е-С--Т  `);
    expect(() => animal.rename(`   Т-Е-С-t-Т  `))
      .toThrowError(`Новая кличка должна содержать только кирилические символы, пробелы или символ "-"`);
    expect(animal.name).toBe(`   Т-Е-С--Т  `);
  });
});
