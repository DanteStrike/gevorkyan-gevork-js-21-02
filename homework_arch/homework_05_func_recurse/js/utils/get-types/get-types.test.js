import getTypes from "./get-types";

describe(`getTypes`, () => {
  it(`should work correctly`, () => {
    expect(getTypes()).toStrictEqual(undefined);
    expect(getTypes([])).toStrictEqual({
      numbers: [],
      strings: [],
      objects: []
    });

    const setMock = new Set([`any`]);
    const mapMock = new Map();
    expect(getTypes([111, `str`, {}, [`any`], setMock, mapMock, undefined, null, false, () => {}]))
      .toStrictEqual({
        numbers: [111],
        strings: [`str`],
        objects: [{}, [`any`], setMock, mapMock, null]
      });
  });
});
