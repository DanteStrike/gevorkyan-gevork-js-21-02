const getArithmeticMean = (arr) => (arr && arr.length !== 0) ? arr.reduce((sum, num) => {
  sum += num;
  return sum;
}, 0) / arr.length : undefined;

export default getArithmeticMean;
