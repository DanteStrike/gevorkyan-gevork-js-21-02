const getAllHTMLComments = (str = ``) => {
  const matches = str.match(/(?<=<!--).*?(?=-->)/g);

  return matches ? matches.map((match) => match.trim()) : [];
};

export default getAllHTMLComments;
