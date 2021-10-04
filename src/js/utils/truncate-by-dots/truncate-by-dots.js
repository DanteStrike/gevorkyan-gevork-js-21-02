const truncateByDots = (str, amount) => (amount >= str.length) ? str : str.slice(0, amount) + `...`;

export default truncateByDots;
