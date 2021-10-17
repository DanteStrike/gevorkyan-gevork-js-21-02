import Animal from "./animal";

describe(`FUNC Animal should work correctly`, () => {
  it(`props should work correctly`, () => {
    const animal = new Animal();
    expect(animal.getName()).toBe(`Животное`);
    expect(Object.getOwnPropertyDescriptor(animal, `getName`)).toMatchObject({
      enumerable: false,
      writable: false,
      configurable: false
    });
    animal.setName(`Животное2`);
    expect(animal.getName()).toBe(`Животное2`);
    expect(Object.getOwnPropertyDescriptor(animal, `setName`)).toMatchObject({
      enumerable: false,
      writable: false,
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
      enumerable: false
    });

    animal.rename(`Барсик`);
    expect(animal.getName()).toBe(`Барсик`);
    expect(Object.getOwnPropertyDescriptor(animal, `rename`)).toMatchObject({
      enumerable: false,
      writable: false,
      configurable: false
    });

    animal.rename(`   Т-Е-С--Т  `);
    expect(animal.getName()).toBe(`   Т-Е-С--Т  `);
    expect(() => animal.rename(`   Т-Е-С-t-Т  `))
      .toThrowError(`Новая кличка должна содержать только кирилические символы, пробелы или символ "-"`);
    expect(animal.getName()).toBe(`   Т-Е-С--Т  `);
  });
});
