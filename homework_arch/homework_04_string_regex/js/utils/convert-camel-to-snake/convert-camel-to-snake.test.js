import convertCamelToSnake from "./convert-camel-to-snake";

describe(`convertCamelToSnake`, () => {
  it(`should work correctly`, () => {
    expect(convertCamelToSnake(`C`)).toBe(`c`);
    expect(convertCamelToSnake(`Camel`)).toBe(`camel`);
    expect(convertCamelToSnake(`CamelCase`)).toBe(`camel_case`);
    expect(convertCamelToSnake(`GetUserID`)).toBe(`get_user_i_d`);
    expect(convertCamelToSnake(`GetUserId`)).toBe(`get_user_id`);
    expect(convertCamelToSnake(`GetUserIdSuperCamelCase`)).toBe(`get_user_id_super_camel_case`);
  });
});
