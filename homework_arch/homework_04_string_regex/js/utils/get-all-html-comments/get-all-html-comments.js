const getAllHTMLComments = (str = ``) => {
  const matches = str.match(/(?<=<!--).*?(?=-->)/gs);

  return matches ? matches.map((match) => match.trim()) : [];
};

export default getAllHTMLComments;
