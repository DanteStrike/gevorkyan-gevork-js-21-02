import moment from 'moment';

const normalizeCardDate = (date: string): string => {
  const momentDate = moment(date);
  return `${momentDate.format('DD MMMM HH:mm')}`;
};

const normalizeProfileDate = (date: string): string => {
  const momentDate = moment(date);
  return `${momentDate.format('DD MMMM YYYY')}`;
};

export default {
  normalizeCardDate,
  normalizeProfileDate,
};
