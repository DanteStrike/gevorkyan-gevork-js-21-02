import moment from 'moment';
import 'moment/locale/ru';

const normalizeCardDate = (date: string): string => {
  const momentDate = moment(date);
  return `${momentDate.format('DD MMMM HH:mm')}`;
};

export default {
  normalizeCardDate,
};
