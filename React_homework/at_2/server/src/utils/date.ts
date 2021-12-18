import moment from 'moment';
import 'moment/locale/ru';

const normalizeCardDate = (date: string): string => {
  const momentDate = moment(date);
  return `${momentDate.format('DD MMMM HH:mm')}`;
};

const normalizeUserDate = (date: string, locale?: string): string =>
  `${moment(date)
    .locale(locale || ``)
    .format('DD MMMM YYYY')}`;

export default {
  normalizeCardDate,
  normalizeUserDate,
};
