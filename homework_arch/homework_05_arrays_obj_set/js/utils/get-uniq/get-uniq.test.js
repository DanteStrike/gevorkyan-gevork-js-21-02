import getUniq from "./get-uniq";

describe(`getUniq`, () => {
  it(`should work correctly`, () => {
    expect(getUniq()).toStrictEqual(undefined);
    expect(getUniq([])).toStrictEqual([]);
    expect(getUniq([1])).toStrictEqual([1]);
    expect(getUniq([1, 3, 1, 4, `3`, 3, `5`, `3`, `3`, 10, 12, 10])).toStrictEqual([4, `5`, 12]);
    expect(getUniq([`0`, `AAA`, 1, 3, 1, 99, 4, `3`, 3, `5`, `3`, `3`, 10, 12, 10, -1]))
      .toStrictEqual([`0`, `AAA`, 99, 4, `5`, 12, -1]);
  });
});
