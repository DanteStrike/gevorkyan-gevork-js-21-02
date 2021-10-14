const parseToObject = (pairs) => {
  return pairs.reduce((res, [key, val]) => {
    const isPairs = Array.isArray(val) && val.length !== 0 && val.every((el) => Array.isArray(el) && el.length === 2);

    res[key] = isPairs ? parseToObject(val) : val;
    return res;
  }, {});
};

export default parseToObject;
