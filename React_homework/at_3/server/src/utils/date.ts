import moment from 'moment';
import 'moment/locale/ru';

const setupLocal = (date: string, locale?: string): moment.Moment => moment(date).locale(locale || ``);

const normalizeCardDate = (date: string, locale?: string): string =>
  `${setupLocal(date, locale).format('DD MMMM HH:mm')}`;

const normalizeUserDate = (date: string, locale?: string): string =>
  `${setupLocal(date, locale).format('DD MMMM YYYY')}`;

export default {
  normalizeCardDate,
  normalizeUserDate,
};
