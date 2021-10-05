import verifyIsContaining from "./verify-is-containing";

describe(`verifyIsContaining`, () => {
  it(`should work correctly`, () => {
    expect(verifyIsContaining(`aaabbccdddd,aa`)).toStrictEqual({
      result: true,
      firstStr: `aaabbccdddd`,
      secondStr: `aa`
    });
    expect(verifyIsContaining(`aaabbccdddd,bC`)).toStrictEqual({
      result: true,
      firstStr: `aaabbccdddd`,
      secondStr: `bC`
    });
    expect(verifyIsContaining(`aaabbccddedd,e`)).toStrictEqual({
      result: true,
      firstStr: `aaabbccddedd`,
      secondStr: `e`
    });
    expect(verifyIsContaining(`aaabbccdddd,ddD`)).toStrictEqual({
      result: true,
      firstStr: `aaabbccdddd`,
      secondStr: `ddD`
    });
    expect(verifyIsContaining(`   aaabbc_  _c  ddd  d   ,  aa`)).toStrictEqual({
      result: true,
      firstStr: `   aaabbc_  _c  ddd  d   `,
      secondStr: `  aa`
    });
    expect(verifyIsContaining(`aaabb _c d  ddd, _C d  `)).toStrictEqual({
      result: true,
      firstStr: `aaabb _c d  ddd`,
      secondStr: ` _C d  `
    });
    expect(verifyIsContaining(`   aaabbc_  _c  ddd  d   ,   AAABBC_  _C  DDD  D   `)).toStrictEqual({
      result: true,
      firstStr: `   aaabbc_  _c  ddd  d   `,
      secondStr: `   AAABBC_  _C  DDD  D   `
    });
    expect(verifyIsContaining(`   ,  `)).toStrictEqual({
      result: true,
      firstStr: `   `,
      secondStr: `  `
    });

    expect(verifyIsContaining(`aaabbccdddd,`)).toStrictEqual({
      result: false,
      firstStr: `aaabbccdddd`,
      secondStr: ``
    });
    expect(verifyIsContaining(`aaabbccdddd,aaaa`)).toStrictEqual({
      result: false,
      firstStr: `aaabbccdddd`,
      secondStr: `aaaa`
    });
    expect(verifyIsContaining(`aaabbccdddd,BdC`)).toStrictEqual({
      result: false,
      firstStr: `aaabbccdddd`,
      secondStr: `BdC`
    });
    expect(verifyIsContaining(`aaabbccdddd,ddDdd`)).toStrictEqual({
      result: false,
      firstStr: `aaabbccdddd`,
      secondStr: `ddDdd`
    });
    expect(verifyIsContaining(`   aaabbc_  _c  ddd  d   , S d `)).toStrictEqual({
      result: false,
      firstStr: `   aaabbc_  _c  ddd  d   `,
      secondStr: ` S d `
    });
    expect(verifyIsContaining(`   aaabbc_  _c  ddd  d   ,    aaAbbc_  _C  dDd  d   `)).toStrictEqual({
      result: false,
      firstStr: `   aaabbc_  _c  ddd  d   `,
      secondStr: `    aaAbbc_  _C  dDd  d   `
    });
    expect(verifyIsContaining(`  ,   `)).toStrictEqual({
      result: false,
      firstStr: `  `,
      secondStr: `   `
    });
    expect(verifyIsContaining(`,`)).toStrictEqual({
      result: false,
      firstStr: ``,
      secondStr: ``
    });
    expect(verifyIsContaining(`a,`)).toStrictEqual({
      result: false,
      firstStr: `a`,
      secondStr: ``
    });
    expect(verifyIsContaining(`,a`)).toStrictEqual({
      result: false,
      firstStr: ``,
      secondStr: `a`
    });

    expect(() => verifyIsContaining()).toThrowError(`String is empty`);
    expect(() => verifyIsContaining(``)).toThrowError(`String is empty`);
    expect(() => verifyIsContaining(` mib - mib `)).toThrowError(`String has not comma`);
    expect(() => verifyIsContaining(` mib ,-, mib `)).toThrowError(`String has more than 1 comma`);
  });
});
