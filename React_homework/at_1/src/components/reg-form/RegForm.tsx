import React from 'react';
import './RegForm.scss';
import {Moment} from 'moment';
import {Form, Input, DatePicker, Radio} from 'antd';
import Button from '../submit-button/SubmitButton';
import CustomLink from '../custom-link/CustomLink';
import {IUserRegistration} from '../../types';
import {RoutePath} from '../../enums';
import {DataUtils, ValidateUtils} from '../../utils';

interface IRegFormProps {
  loading?: boolean;
  onSubmit?: (data: IUserRegistration) => void;
}
type RegFormValuesType = Omit<IUserRegistration, 'firstName' | 'lastName' | 'dateOfBirth'> & {
  name: string;
  dateOfBirth: Moment;
};

const {Item} = Form;

function RegForm({loading, onSubmit = () => {}}: IRegFormProps) {
  const [form] = Form.useForm();

  const handleFormFinish = (filedValues: RegFormValuesType) => {
    const {name, dateOfBirth, ...values} = filedValues;
    const normName = DataUtils.normalizeName(name);
    const userReg: IUserRegistration = {
      ...normName,
      ...values,
      dateOfBirth: dateOfBirth.toISOString(),
    };
    onSubmit(userReg);
  };

  return (
    <Form
      className="reg-form"
      form={form}
      name="register"
      size="middle"
      layout="vertical"
      validateTrigger="onSubmit"
      onFinish={handleFormFinish}
      initialValues={{
        name: ``,
        gender: `male`,
        dateOfBirth: ``,
        email: ``,
        phone: ``,
      }}
    >
      <Item name="name" label="ФИО:" rules={[ValidateUtils.requireValidatorName, ValidateUtils.userNameValidator]}>
        <Input placeholder="Введите свое имя" />
      </Item>

      <Item className="reg-form__gender" name="gender" label="Пол:">
        <Radio.Group className="reg-form__gender-container">
          <Radio value="male">Мужской</Radio>
          <Radio value="female">Женский</Radio>
          <Radio value="other">Другой</Radio>
        </Radio.Group>
      </Item>

      <Item
        name="dateOfBirth"
        label="Дата рождения:"
        rules={[ValidateUtils.requireValidatorBirth, ValidateUtils.sevenYearsOldValidator]}
      >
        <DatePicker
          className="reg-form__date-picker"
          placeholder="Выберите дату"
          disabledDate={ValidateUtils.disableDateOverCurrent}
        />
      </Item>

      <Item
        name="email"
        label="Email:"
        rules={[ValidateUtils.requireValidatorEmail, ValidateUtils.emailFormatValidator]}
      >
        <Input placeholder="anonim@gmail.com" />
      </Item>

      <Item
        name="phone"
        label="Телефон:"
        rules={[ValidateUtils.requireValidatorPhone, ValidateUtils.phoneFormatValidator]}
      >
        <Input placeholder="+79991114455" />
      </Item>

      <Item className="reg-form__last">
        <Button loading={loading}>Зарегистрироваться</Button>
        <CustomLink className="reg-form__link" to={RoutePath.LOGIN}>
          Уже есть аккаунт? Войти
        </CustomLink>
      </Item>
    </Form>
  );
}

RegForm.defaultProps = {
  loading: false,
  onSubmit: () => {},
};

export default React.memo(RegForm);
