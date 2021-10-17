import Animal from "./animal";

describe(`Obj Animal should work correctly`, () => {
  it(`props should work correctly`, () => {
    const animal = new Animal();
    expect(animal.name).toBe(`Животное`);
    expect(Object.getOwnPropertyDescriptor(animal, `__name`)).toMatchObject({
      value: `Животное`,
      enumerable: false,
      configurable: false
    });
    expect(Object.getOwnPropertyDescriptor(animal, `name`)).toMatchObject({
      configurable: false
    });
  });

  it(`methods should work correctly`, () => {
    const animal = new Animal();
    expect(animal.eat()).toBe(`Животное ест`);
    expect(Object.getOwnPropertyDescriptor(animal, `eat`)).toMatchObject({
      enumerable: false,
      writable: false,
      configurable: false
    });

    expect(animal.say()).toBe(`Неизвестное животное молчит`);
    expect(Object.getOwnPropertyDescriptor(animal, `say`)).toMatchObject({
      enumerable: false,
      writable: false,
      configurable: false
    });

    animal.rename(`Барсик`);
    expect(animal.name).toBe(`Барсик`);
    expect(Object.getOwnPropertyDescriptor(animal, `rename`)).toMatchObject({
      enumerable: false,
      writable: false,
      configurable: false
    });

    animal.rename(`   Т-Е-С--Т  `);
    expect(animal.name).toBe(`   Т-Е-С--Т  `);
    expect(() => animal.rename(`   Т-Е-С-t-Т  `))
      .toThrowError(`Новая кличка должна содержать только кирилические символы, пробелы или символ "-"`);
    expect(animal.name).toBe(`   Т-Е-С--Т  `);
  });
});
