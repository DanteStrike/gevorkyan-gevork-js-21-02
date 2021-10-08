import unify from "./unify";

describe(`unify`, () => {
  it(`should work correctly`, () => {
    expect(unify()).toStrictEqual(undefined);
    expect(unify([])).toStrictEqual([]);
    expect(unify([1])).toStrictEqual([1]);
    expect(unify([1, `3`, 3, `5`])).toStrictEqual([1, `3`, 3, `5`]);
    expect(unify([1, 3, 1, 4, `3`, 3, `5`, `3`, `3`, 10, 12, 10])).toStrictEqual([1, 3, 4, `3`, `5`, 10, 12]);
  });
});
