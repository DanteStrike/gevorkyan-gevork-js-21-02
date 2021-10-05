import getAllNumbers from "./get-all-numbers";

describe(`getAllNumbers`, () => {
  it(`should work correctly`, () => {
    const mockStr = `3.1 412.412.444  4124s s142 2x[r 0555.50 55 1111.111s ssss11 124`;

    expect(getAllNumbers(mockStr))
      .toStrictEqual([`3.1`, `412.412`, `444`, `4124`, `142`, `2`, `0`, `555.50`, `55`, `1111.111`, `11`, `124`]);
    expect(getAllNumbers(`qwerty`)).toStrictEqual([]);
    expect(getAllNumbers()).toStrictEqual([]);
  });
});
