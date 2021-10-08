const getUniq = (arr) => {
  if (arr === undefined) {
    return undefined;
  }

  const elementsAmount = arr.reduce((map, el) => {
    if (map.has(el)) {
      map.set(el, map.get(el) + 1);
    } else {
      map.set(el, 1);
    }
    return map;
  }, new Map());

  return Array.from(elementsAmount).reduce((uniq, [val, amount]) => {
    if (amount === 1) {
      uniq.push(val);
    }

    return uniq;
  }, []);
};

export default getUniq;
