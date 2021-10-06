const validateDocumentID = (id) => {
  const re = /^[A-Za-z0-9]{16}$|^([A-Za-z0-9]{4}-){3}[A-Za-z0-9]{4}$/;

  return re.test(id);
};

export default validateDocumentID;
