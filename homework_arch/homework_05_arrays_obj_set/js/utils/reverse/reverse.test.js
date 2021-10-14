import reverse from "./reverse";

describe(`reverse`, () => {
  it(`should work correctly`, () => {
    expect(reverse()).toStrictEqual(undefined);
    expect(reverse([])).toStrictEqual([]);
    expect(reverse([`any`])).toStrictEqual([`any`]);
    expect((reverse([1, `a`, `b`, 2, 3, `c`]))).toStrictEqual([`c`, 3, 2, `b`, `a`, 1]);
  });
});
