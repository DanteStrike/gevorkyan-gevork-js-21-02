import {RuleObject} from 'antd/es/form';
import moment from 'moment';
import {message, Upload} from 'antd';
import DateUtils from './date';

const requireValidator = (text: string) => () => ({
  validator(_: RuleObject, value: any) {
    if (!value) {
      return Promise.reject(new Error(text));
    }
    return Promise.resolve();
  },
});
const requireValidatorID = requireValidator(`Укажите ID`);
const requireValidatorName = requireValidator(`Укажите ФИО`);
const requireValidatorGender = requireValidator(`Укажите ПОЛ`);
const requireValidatorBirth = requireValidator(`Укажите дату рождения`);
const requireValidatorEmail = requireValidator(`Укажите почту`);
const requireValidatorPhone = requireValidator(`Укажите телефон`);

const yearOldValidator = (age: number) => () => ({
  validator(_: RuleObject, value: any) {
    if (value > moment().subtract(age, `years`)) {
      return Promise.reject(new Error(`Доступ только для ${age}+`));
    }
    return Promise.resolve();
  },
});
const sevenYearsOldValidator = yearOldValidator(7);

const userNameValidator = () => ({
  validator(_: RuleObject, value: any) {
    const {firstName, lastName} = DateUtils.normalizeName(value);

    if (firstName.length < 2 || lastName.length < 2) {
      return Promise.reject(new Error('Имя и фамилия должны содержать больше 2-х символов'));
    }

    if (firstName.length > 50 || lastName.length > 50) {
      return Promise.reject(new Error('Имя и фамилия не могут быть длинее 50-и символов'));
    }

    return Promise.resolve();
  },
});

const imageValidator = (file: File) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('Можно использовать только PNG и JPEG');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Аватарка должна весить < 2Mb');
  }
  return (isJpgOrPng && isLt2M) || Upload.LIST_IGNORE;
};

const phoneFormatValidator = {pattern: new RegExp(`^\\+?7(\\d{10})$`), message: 'Введите корректный телефон'};
const disableDateOverCurrent = (current: moment.Moment) => current && current > moment();

export default {
  userNameValidator,
  imageValidator,
  requireValidatorName,
  requireValidatorGender,
  requireValidatorBirth,
  requireValidatorEmail,
  sevenYearsOldValidator,
  requireValidatorPhone,
  phoneFormatValidator,
  disableDateOverCurrent,
  requireValidatorID,
};
