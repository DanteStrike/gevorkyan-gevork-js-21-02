import Calc from "./calc";

describe(`class Calc`, () => {
  it(`should work correctly`, () => {
    expect(new Calc().__curVal).toBe(0);
    expect(new Calc().__checkIsNaN(`1`)).toBe(true);
    expect(new Calc().__checkIsNaN(1)).toBe(false);

    expect(new Calc().setVal(33).__curVal).toBe(33);
    expect(new Calc().setVal(33).getVal()).toBe(33);

    expect(new Calc().setVal(`anystr`).getVal()).toBe(NaN);
    expect(new Calc().sum(`anystr`).getVal()).toBe(NaN);
    expect(new Calc().minus(`anystr`).getVal()).toBe(NaN);
    expect(new Calc().div(`anystr`).getVal()).toBe(NaN);
    expect(new Calc().multiply(`anystr`).getVal()).toBe(NaN);

    const calc = new Calc();
    expect(calc.sum(10).minus(2).div(4).multiply(3).getVal()).toBe((10 - 2) * 3 / 4);
    expect(calc.reset().__curVal).toBe(0);
    expect(calc.div(0).__curVal).toBe(NaN);
  });
});
