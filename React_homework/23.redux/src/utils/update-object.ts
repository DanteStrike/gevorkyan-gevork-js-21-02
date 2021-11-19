const updateObject = (oldObject: object, newValues: object, ...additionalValues: object[]) =>
  Object.assign({}, oldObject, newValues, ...additionalValues);

export default updateObject;
