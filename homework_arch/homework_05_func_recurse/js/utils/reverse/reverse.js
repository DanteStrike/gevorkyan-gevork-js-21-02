const reverse = (arr) => arr ? arr.map((el, index, array) => array[array.length - 1 - index]) : undefined;

export default reverse;
