import verifyIsContaining from "./verify-is-containing";

describe(`must work`, () => {
  it(`should work`, () => {
    expect(verifyIsContaining(`test`)).toBe(`test`)
  });
});
