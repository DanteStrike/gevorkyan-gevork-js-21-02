import getArithmeticMean from "./get-arithmetic-mean";

describe(`getArithmeticMean`, () => {
  it(`should work correctly`, () => {
    expect(getArithmeticMean()).toBe(undefined);
    expect(getArithmeticMean([])).toBe(undefined);
    expect(getArithmeticMean([4])).toBe(4);
    expect(getArithmeticMean([5, 2.2, 1])).toBe((5 + 2.2 + 1) / 3);
  });
});
