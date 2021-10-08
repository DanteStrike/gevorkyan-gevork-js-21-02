import Viewer from "./viewer";

describe(`class Viewer`, () => {
  it(`method print should work correctly`, () => {
    expect(new Viewer().print()).toBe(``);
    expect(new Viewer({}).print()).toBe(``);
    expect(new Viewer({a: 1, b: 2}).print()).toBe(`a: 1,b: 2`);
    expect(Object.getOwnPropertyDescriptor(new Viewer(), `print`)).toMatchObject({enumerable: false});
  });
});
