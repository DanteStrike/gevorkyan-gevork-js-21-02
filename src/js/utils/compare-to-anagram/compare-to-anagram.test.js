import compareToAnagram from "./compare-to-anagram";

describe(`compareToAnagram`, () => {
  it(`should work correctly`, () => {
    expect(compareToAnagram()).toBe(undefined);

    expect(compareToAnagram(``, ``)).toBe(true);
    expect(compareToAnagram(`a`, ``)).toBe(false);
    expect(compareToAnagram(``, `a`)).toBe(false);
    expect(compareToAnagram(`a`, `a`)).toBe(true);
    expect(compareToAnagram(`ab`, `ab`)).toBe(false);
    expect(compareToAnagram(`aab`, `baa`)).toBe(true);
    expect(compareToAnagram(`aab__`, `__baa`)).toBe(true);
    expect(compareToAnagram(`aab__`, `c_baa`)).toBe(false);
    expect(compareToAnagram(`aab__`, `___baa`)).toBe(false);
  });
});
