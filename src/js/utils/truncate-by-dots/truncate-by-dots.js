const truncateByDots = (str, amount) => {
  if (amount >= str.length) {
    return str;
  }

  return str.slice(0, amount) + `...`;
};

export default truncateByDots;
