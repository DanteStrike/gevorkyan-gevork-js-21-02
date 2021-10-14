const filterByRange = (arr, borderMin = -Infinity, borderMax = Infinity) => {
  if (!arr) {
    return undefined;
  }

  if (borderMax < borderMin) {
    [borderMin, borderMax] = [borderMax, borderMin];
  }

  return arr.filter((el) => borderMin <= el && el <= borderMax);
};

export default filterByRange;
