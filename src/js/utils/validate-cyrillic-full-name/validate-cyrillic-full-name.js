const validateCyrillicFullName = (fullName) => {
  const re = /^([А-Я][а-я]* [А-Я][а-я]*)($| [А-Я][а-я]*(вич|вна)$)/;

  return re.test(fullName);
};

export default validateCyrillicFullName;
