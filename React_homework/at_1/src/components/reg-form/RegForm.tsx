import React from 'react';
import './RegForm.scss';
import moment, {Moment} from 'moment';
import {Form, Input, DatePicker, Radio} from 'antd';
import Button from '../submit-button/SubmitButton';
import CustomLink from '../custom-link/CustomLink';
import {IUserRegistration} from "../../types";

interface IRegFormProps {
  loading?: boolean;
  onSubmit?: (data: IUserRegistration) => void;
}
type RegFormValuesType = Omit<IUserRegistration, "firstName" | "lastName"> & {name: string};

const {Item} = Form;

function RegForm({loading, onSubmit = () => {}}: IRegFormProps) {
  const [form] = Form.useForm();

  const handleFormFinish = (filedValues: RegFormValuesType) => {
    const {name, ...values} = filedValues;
    const [firstName, ...other] = name.trim().split(` `);
    const lastName = other.join(``);

    const userReg: IUserRegistration = {
      firstName, lastName, ...values
    }
    onSubmit(userReg);
  };

  return (
    <Form
      className="reg-form"
      form={form}
      name="register"
      size="middle"
      layout="vertical"
      validateTrigger="submit"
      onFinish={handleFormFinish}
      initialValues={{
        name: ``,
        gender: `male`,
        dateOfBirth: ``,
        email: ``,
        phone: ``,
      }}
    >
      <Item
        name="name"
        label="ФИО:"
        rules={[
          () => ({
            validator(_, value: string) {
              if (!value) {
                return Promise.reject(new Error('Укажите ФИО'));
              }

              const [firstName, ...other] = value.trim().split(` `);
              const lastName = other.join(``);
              if (firstName.length < 2 || lastName.length < 2) {
                return Promise.reject(new Error('Имя и фамилия должны содержать больше 2-х символов'));
              }

              if (firstName.length > 50 || lastName.length > 50) {
                return Promise.reject(new Error('Имя и фамилия не могут быть длинее 50-и символов'));
              }

              return Promise.resolve();
            },
          })
        ]}
      >
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
        rules={[
          () => ({
            validator(_, value: Moment) {
              if (!value) {
                return Promise.reject(new Error('Укажите дату рождения'));
              }

              if (value > moment().subtract(7, `years`)) {
                return Promise.reject(new Error('Вы должны быть старше 7 лет'));
              }

              return Promise.resolve();
            },
          }),
        ]}
      >
        <DatePicker
          className="reg-form__date-picker"
          placeholder="Выберите дату"
          disabledDate={(current) => current && current > moment()}
        />
      </Item>

      <Item
        name="email"
        label="Email:"
        rules={[
          () => ({
            validator(_, value) {
              if (!value) {
                return Promise.reject(new Error('Укажите почту'));
              }
              return Promise.resolve();
            },
          }),
          {type: 'email', message: 'Введите корректную почту'}
        ]}>
        <Input placeholder="anonim@gmail.com" />
      </Item>

      <Item
        name="phone"
        label="Телефон:"
        rules={[
          () => ({
            validator(_, value) {
              if (!value) {
                return Promise.reject(new Error('Укажите телефон'));
              }
              return Promise.resolve();
            },
          }),
          {pattern: new RegExp(`^\\+?7(\\d{10})$`), message: 'Введите корректный телефон'}
        ]}
      >
        <Input placeholder="+79991114455" />
      </Item>

      <Item className="reg-form__last">
        <Button loading={loading}>Зарегистрироваться</Button>
        <CustomLink className="reg-form__link" to="/login">
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
