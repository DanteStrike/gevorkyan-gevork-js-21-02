import validateDocumentID from "./validate-document-id";

describe(`validateDocumentID`, () => {
  it(`should work correctly`, () => {
    expect(validateDocumentID(`AbcD-9612-77gG-f1A2`)).toBe(true);
    expect(validateDocumentID(`AbcD961277gGf1A2`)).toBe(true);

    expect(validateDocumentID(`AЯcD961277gGf1A2`)).toBe(false);
    expect(validateDocumentID(`AbcD96!277gGf1A2`)).toBe(false);
    expect(validateDocumentID(`AbcD961277g*f1A2`)).toBe(false);
    expect(validateDocumentID(`  AbcD961277gGf1A2`)).toBe(false);
    expect(validateDocumentID(`AbcD961277gGf1A2  `)).toBe(false);
    expect(validateDocumentID(`AbcD961277g  Gf1A2`)).toBe(false);
    expect(validateDocumentID(`zAbcD961277gGf1A2`)).toBe(false);
    expect(validateDocumentID(`AbcD961277gGf1A2z`)).toBe(false);
    expect(validateDocumentID(`AbcD9612-77gG-f1A2`)).toBe(false);
    expect(validateDocumentID(`AbcD-961277gG-f1A2`)).toBe(false);
    expect(validateDocumentID(`AbcD-9612-77gGf1A2`)).toBe(false);
    expect(validateDocumentID(`AbD-9612-77gG-f1A2`)).toBe(false);
    expect(validateDocumentID(`AbcD-962-77gG-f1A2`)).toBe(false);
    expect(validateDocumentID(`AbcD-9612-77G-f1A2`)).toBe(false);
    expect(validateDocumentID(`AbcD-9612-77gG-1A2`)).toBe(false);
    expect(validateDocumentID(`Ab4cD-9612-77gG-f1A2`)).toBe(false);
    expect(validateDocumentID(`AbcD-96512-77gG-f1A2`)).toBe(false);
    expect(validateDocumentID(`AbcD-9612-776gG-f1A2`)).toBe(false);
    expect(validateDocumentID(`AbcD-9612-77gG-f17A2`)).toBe(false);
  });
});
