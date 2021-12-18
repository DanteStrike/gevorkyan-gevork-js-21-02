const normalizeQuery = (page: number, limit: number, minLimit: number) => {
  if (limit >= minLimit) {
    return {
      limit,
      page,
    };
  }

  let normalizedLimit = limit;
  let normalizedPage = page;
  const pageLimit = Math.ceil(minLimit / limit);
  if (limit < minLimit) {
    normalizedLimit = pageLimit * limit;
    normalizedPage = Math.floor(page / pageLimit);
  }

  return {
    limit: normalizedLimit,
    page: normalizedPage,
    dataSlice: {
      left: (page % pageLimit) * limit,
      right: ((page % pageLimit) + 1) * limit,
    },
  };
};

export default {
  normalizeQuery,
};
