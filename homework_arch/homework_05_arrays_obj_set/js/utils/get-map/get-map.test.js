import getMap from "./get-map";

describe(`getMap`, () => {
  it(`should work correctly`, () => {
    expect(getMap()).toStrictEqual(undefined);
    expect(getMap([])).toStrictEqual({});
    expect(getMap([[], [], []])).toStrictEqual({});
    expect(getMap([[`anyKey`, `anyVal`]])).toStrictEqual({anyKey: `anyVal`});

    expect(getMap([[1, 2], [`anyKey`, `anyVal-1`], [2, `anyVal-2`], [`anyKey`, 3], [1, 3], [`anyKey-2`, 4]]))
      .toStrictEqual({
        '1': 3,
        'anyKey': 3,
        '2': `anyVal-2`,
        'anyKey-2': 4
      });
  });
});
