const normalizeParams = (page: number, limit: number, minLimit: number) => {
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
    normalizedPage = Math.ceil(page / pageLimit);
  }

  return {
    limit: normalizedLimit,
    page: normalizedPage,
    dataSlice: {
      left: ((page - 1) % pageLimit) * limit,
      right: (((page - 1) % pageLimit) + 1) * limit,
    },
  };
};

const dummyRequest = ({onSuccess}: {onSuccess?: Function}) => {
  setTimeout(() => {
    if (onSuccess) {
      onSuccess('ok');
    }
  }, 0);
};

export default {
  normalizeParams,
  dummyRequest,
};
