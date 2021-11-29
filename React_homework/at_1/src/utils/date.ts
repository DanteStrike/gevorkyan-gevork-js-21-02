import moment from 'moment';

const normalizeCardDate = (date: string): string => {
  const momentDate = moment(date);
  return `${momentDate.format('DD MMMM HH:mm')}`;
};

const normalizeProfileDate = (date: string): string => {
  const momentDate = moment(date);
  return `${momentDate.format('DD MMMM YYYY')}`;
};

const normalizeName = (name: string) => {
  const [firstName, ...other] = name.trim().split(` `);
  const lastName = other.join(``);

  return {
    firstName,
    lastName,
  };
};

const collectName = (firstName: string, lastName: string): string => `${firstName} ${lastName}`.trim();

export default {
  normalizeCardDate,
  normalizeProfileDate,
  normalizeName,
  collectName
};
