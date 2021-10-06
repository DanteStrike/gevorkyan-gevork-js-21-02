const convertCamelToSnake = (camelCase) => camelCase.replace(/[A-Z]/g,
    (match, offset) => (offset === 0) ? match.toLowerCase() : `_${match.toLowerCase()}`);

export default convertCamelToSnake;
