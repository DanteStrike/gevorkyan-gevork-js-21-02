const getTypes = (arr) => arr ? arr.reduce((res, el) => {
  switch (typeof el) {
    case `number`:
      res.numbers.push(el);
      break;

    case `string`:
      res.strings.push(el);
      break;

    case `object`:
      res.objects.push(el);
      break;

    default:
      break;
  }

  return res;
}, {
  numbers: [],
  strings: [],
  objects: []
}) : undefined;

export default getTypes;
