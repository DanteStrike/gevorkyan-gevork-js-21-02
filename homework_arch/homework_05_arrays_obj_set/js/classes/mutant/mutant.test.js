import Mutant from "./mutant";

describe(`class Mutant`, () => {
  it(`should set props correctly`, () => {
    const mutantOne = new Mutant();

    expect(mutantOne).not.toHaveProperty(`key-1`);
    mutantOne.setProp(`key-1`, `anyVal-1`);
    expect(Object.getOwnPropertyDescriptor(mutantOne, `key-1`)).toEqual({
      value: `anyVal-1`,
      writable: true,
      configurable: true,
      enumerable: true
    });

    expect(mutantOne).not.toHaveProperty(`key-2`);
    mutantOne.setProp(`key-2`, `anyVal-2`, {
      writable: false
    });
    expect(Object.getOwnPropertyDescriptor(mutantOne, `key-2`)).toEqual({
      value: `anyVal-2`,
      writable: false,
      configurable: true,
      enumerable: true
    });

    expect(mutantOne).not.toHaveProperty(`key-3`);
    mutantOne.setProp(`key-3`, `anyVal-3`, {
      configurable: false
    });
    expect(Object.getOwnPropertyDescriptor(mutantOne, `key-3`)).toEqual({
      value: `anyVal-3`,
      writable: true,
      configurable: false,
      enumerable: true
    });

    expect(mutantOne).not.toHaveProperty(`key-4`);
    mutantOne.setProp(`key-4`, `anyVal-4`, {
      enumerable: false
    });
    expect(Object.getOwnPropertyDescriptor(mutantOne, `key-4`)).toEqual({
      value: `anyVal-4`,
      writable: true,
      configurable: true,
      enumerable: false
    });

    mutantOne.setProp(`key-1`, `anyValC`, {
      writable: false,
      configurable: false,
      enumerable: false
    });
    expect(mutantOne[`key-1`]).toBe(`anyValC`);
  });
});
