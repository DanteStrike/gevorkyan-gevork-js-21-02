import validateCyrillicFullName from "./validate-cyrillic-full-name";

describe(`validateCyrillicFullName`, () => {
  it(`should work correctly`, () => {
    expect(validateCyrillicFullName(`Иванов Иван`)).toBe(true);
    expect(validateCyrillicFullName(`И И`)).toBe(true);
    expect(validateCyrillicFullName(`Иванов Иван Иванович`)).toBe(true);
    expect(validateCyrillicFullName(`Иванова Ивана Ивна`)).toBe(true);

    expect(validateCyrillicFullName(`Иванов Иван Ивано`)).toBe(false);
    expect(validateCyrillicFullName(`   Иванов Иван Иванович`)).toBe(false);
    expect(validateCyrillicFullName(`Иванов Иван Иванович   `)).toBe(false);
    expect(validateCyrillicFullName(`Иванов   Иван Иванович`)).toBe(false);
    expect(validateCyrillicFullName(`Иванов Иван   Иванович`)).toBe(false);
    expect(validateCyrillicFullName(`ИИ И`)).toBe(false);
    expect(validateCyrillicFullName(`И ИИ`)).toBe(false);

    expect(validateCyrillicFullName(`Иванов Иван `)).toBe(false);
    expect(validateCyrillicFullName(` Иванов Иван `)).toBe(false);
    expect(validateCyrillicFullName(`Иванов  Иван`)).toBe(false);

    expect(validateCyrillicFullName(`Иванов`)).toBe(false);
    expect(validateCyrillicFullName(`иванова Ивана Ивна`)).toBe(false);
    expect(validateCyrillicFullName(`Иванова ивана Ивна`)).toBe(false);
    expect(validateCyrillicFullName(`Иванова Ивана ивна`)).toBe(false);

    expect(validateCyrillicFullName(`Ивzанов Иван Иванович`)).toBe(false);
    expect(validateCyrillicFullName(`Иванова Ива6на Ивна`)).toBe(false);
    expect(validateCyrillicFullName(`Иванова Ивана И!вна`)).toBe(false);
  });
});
