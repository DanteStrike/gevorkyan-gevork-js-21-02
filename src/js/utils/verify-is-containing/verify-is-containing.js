const verifyIsContaining = (tmpStr = ``) => {
  if (tmpStr === ``) {
    throw new Error(`String is empty`);
  }

  const strings = tmpStr.split(`,`);

  switch (true) {
    case strings.length < 2:
      throw new Error(`String has not comma`);
    case strings.length > 2:
      throw new Error(`String has more than 1 comma`);
  }

  const firstStr = strings[0];
  const secondStr = strings[1];

  return {
    result: (firstStr.length === 0 || secondStr.length === 0) ?
      false : firstStr.toLowerCase().includes(secondStr.toLowerCase()),
    firstStr,
    secondStr
  };
};

export default verifyIsContaining;
