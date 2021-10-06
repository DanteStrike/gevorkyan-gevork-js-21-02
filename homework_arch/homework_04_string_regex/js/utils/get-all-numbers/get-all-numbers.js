const getAllNumbers = (str = ``) => {
  const matches = str.match(/[1-9][0-9]*(\.[0-9]+)?|[0-9]/g);

  return matches ? matches : [];
};

export default getAllNumbers;
