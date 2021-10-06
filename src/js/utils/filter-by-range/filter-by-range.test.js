import filterByRange from "./filter-by-range";

describe(`filterByRange`, () => {
  it(`should work correctly`, () => {
    expect(filterByRange()).toBe(undefined);
    expect(filterByRange([])).toStrictEqual([]);
    expect(filterByRange([], 4)).toStrictEqual([]);
    expect(filterByRange([], 2, 4)).toStrictEqual([]);

    expect(filterByRange([-900, 300, -100])).toStrictEqual([-900, 300, -100]);
    expect(filterByRange([-900, 300, -100, 10, 0, 900], 0)).toStrictEqual([300, 10, 0, 900]);
    expect(filterByRange([-900, 300, -100, 10, 0, 900], 0, 300)).toStrictEqual([300, 10, 0]);
    expect(filterByRange([-900, 300, -100, 10, 0, 900], 300, 0)).toStrictEqual([300, 10, 0]);
    expect(filterByRange([-900, 300, -100, 10, 10, 0, 900], 10, 10)).toStrictEqual([10, 10]);
  });
});
