const getMap = (pairs) => pairs ? pairs.reduce((map, pair) => {
  if (pair.length >= 2) {
    map[`${pair[0]}`] = pair[1];
  }

  return map;
}, {}) : undefined;

export default getMap;
