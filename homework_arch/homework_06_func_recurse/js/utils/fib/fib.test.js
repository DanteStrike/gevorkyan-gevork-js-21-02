import {getFib, getFibWithCache} from "./fib";

describe(`fib`, () => {
  it(`getFib should work correctly`, () => {
    expect(getFib(0)).toBe(0);
    expect(getFib(1)).toBe(1);
    expect(getFib(2)).toBe(1);
    expect(getFib(3)).toBe(2);
    expect(getFib(10)).toBe(55);
  });

  it(`getFibWithCache should work correctly`, () => {
    expect(getFibWithCache(0)).toBe(0);
    expect(getFibWithCache.fibCache).toStrictEqual({
      "0": 0,
      "1": 1
    });

    expect(getFibWithCache(1)).toBe(1);
    expect(getFibWithCache.fibCache).toStrictEqual({
      "0": 0,
      "1": 1
    });

    expect(getFibWithCache(2)).toBe(1);
    expect(getFibWithCache.fibCache).toStrictEqual({
      "0": 0,
      "1": 1,
      "2": 1
    });

    expect(getFibWithCache(3)).toBe(2);
    expect(getFibWithCache.fibCache).toStrictEqual({
      "0": 0,
      "1": 1,
      "2": 1,
      "3": 2
    });

    expect(getFibWithCache(10)).toBe(55);
    expect(getFibWithCache.fibCache).toStrictEqual({
      "0": 0,
      "1": 1,
      "2": 1,
      "3": 2,
      "4": 3,
      "5": 5,
      "6": 8,
      "7": 13,
      "8": 21,
      "9": 34,
      "10": 55
    });
  });
});
