import parseToObject from "./parse-to-object";

describe(`parseToObject`, () => {
  it(`should work correctly`, () => {
    expect(parseToObject([])).toStrictEqual({});
    expect(parseToObject([[`name`, `Anna`], [`age`, 22]])).toStrictEqual({name: `Anna`, age: 22});
    expect(parseToObject(
        [
          [`name`, `Banana`],
          [`age`, 18],
          [`pets`,
            [
              [`dog`, `Faust`],
              [`cat`, `Balthazar`],
              [`fish`,
                [
                  [`name`, `fish`],
                  [`type`, `gold`],
                  [`length`, 20]
                ]
              ]
            ]
          ],
          [`empty`, []],
          [`works`, [[33]]],
          [`academy`, [`test`, `test`]]
        ]
    )).toStrictEqual(
        {
          name: `Banana`,
          age: 18,
          pets: {
            dog: `Faust`,
            cat: `Balthazar`,
            fish: {
              name: `fish`,
              type: `gold`,
              length: 20
            }
          },
          empty: [],
          works: [[33]],
          academy: [`test`, `test`]
        }
    );
  });
});
