import getPropsSum from "./get-props-sum";

describe(`getArithmeticMean`, () => {
  it(`should work correctly`, () => {
    expect(getPropsSum()).toBe(undefined);
    expect(getPropsSum({})).toBe(undefined);
    expect(getPropsSum({
      num1: 1,
      num2: 2,
      str1: ` any str  `,
      str2: `900`,
      str3: `900.00`,
      obj: {
        num: 9999
      },
      arr: [999, 999, 999],
      num3: 4.2,
      num4: 5.8
    })).toBe(1 + 2 + 4.2 + 5.8);
  });
});
