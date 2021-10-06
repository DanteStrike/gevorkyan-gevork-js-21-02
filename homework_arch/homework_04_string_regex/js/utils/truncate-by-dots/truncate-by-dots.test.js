import truncateByDots from "./truncate-by-dots";

describe(`truncateByDots`, () => {
  it(`should work correctly`, () => {
    expect(truncateByDots(`aaaccc`, 0)).toBe(`...`);
    expect(truncateByDots(`  `, 1)).toBe(` ...`);
    expect(truncateByDots(`a`, 1)).toBe(`a`);
    expect(truncateByDots(`abcde`, 1)).toBe(`a...`);
    expect(truncateByDots(`  abcde   `, 4)).toBe(`  ab...`);
  });
});
