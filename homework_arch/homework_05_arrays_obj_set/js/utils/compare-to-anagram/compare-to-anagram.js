const compareToAnagram = (firstStr, secondStr) => {
  if (firstStr === undefined || secondStr === undefined) {
    return undefined;
  }

  if (firstStr.length !== secondStr.length) {
    return false;
  }

  for (let index = 0; index < firstStr.length; index++) {
    if (firstStr[index] !== secondStr[secondStr.length - 1 - index]) {
      return false;
    }
  }

  return true;
};

export default compareToAnagram;
