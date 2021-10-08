const getPropsSum = (obj) => (obj && Object.keys(obj).length !== 0) ? Object.entries(obj).reduce((res, [, val]) => {
  res += Number.isFinite(val) ? val : 0;

  return res;
}, 0) : undefined;

export default getPropsSum;
