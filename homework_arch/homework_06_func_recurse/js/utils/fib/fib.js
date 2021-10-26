const getFib = (n) => {
  switch (n) {
    case 0:
      return 0;

    case 1:
      return 1;

    default:
      return getFib(n - 2) + getFib(n - 1);
  }
};

const getFibWithCache = (n) => {
  if (n in getFibWithCache.fibCache) {
    return getFibWithCache.fibCache[n];
  }

  getFibWithCache.fibCache[n] = getFibWithCache(n - 2) + getFibWithCache(n - 1);

  return getFibWithCache.fibCache[n];
};
getFibWithCache.fibCache = {
  "0": 0,
  "1": 1
};

export {getFib, getFibWithCache};
