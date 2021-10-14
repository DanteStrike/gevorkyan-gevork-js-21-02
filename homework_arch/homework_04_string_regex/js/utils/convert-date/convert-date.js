const convertDate = (date) => {
  const re = /^(0[1-9]|1[0-9]|2[0-9]|3[01])\/(0[1-9]|1[012])\/([0-9]{4}) (0[0-9]|1[0-9]|2[0-4])-([0-5][0-9])$/;
  const matchs = date.match(re);

  const day = matchs[1];
  const month = matchs[2];
  const year = matchs[3];
  const hours = matchs[4];
  const minutes = matchs[5];

  const monthLength = [
    31, (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) ? 29 : 28,
    31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return {
    result: `${day}.${month}.${year} ${hours}:${minutes}`,
    isReachable: parseInt(day, 10) <= monthLength[parseInt(month, 10) - 1]
  };
};

export default convertDate;
