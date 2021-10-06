import convertDate from "./convert-date";

describe(`convertDate`, () => {
  it(`should work correctly`, () => {
    expect(convertDate(`12/02/2021 12-00`)).toStrictEqual({
      result: `12.02.2021 12:00`,
      isReachable: true
    });
    expect(convertDate(`29/02/2020 12-00`)).toStrictEqual({
      result: `29.02.2020 12:00`,
      isReachable: true
    });

    expect(convertDate(`29/02/2021 12-00`)).toStrictEqual({
      result: `29.02.2021 12:00`,
      isReachable: false
    });
  });
});
