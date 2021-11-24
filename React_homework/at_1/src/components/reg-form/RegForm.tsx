import React from 'react';
import './RegForm.scss';
import moment, {Moment} from 'moment';
import {Form, Input, DatePicker, Radio} from 'antd';
import Button from '../button/Button';
import CustomLink from '../custom-link/CustomLink';

const {Item} = Form;

function RegForm() {
  const [form] = Form.useForm();

  return (
    <Form
      className="reg-form"
      form={form}
      name="register"
      size="middle"
      layout="vertical"
      initialValues={{
        firstName: ``,
        gender: `male`,
        dateOfBirth: ``,
        email: ``,
        phone: ``,
      }}
    >
      <Item
        name="firstName"
        label="Имя:"
        rules={[
          {min: 2, message: 'Имя должно содержать больше 2-х символов'},
          {max: 50, message: 'Имя не может быть длинее 50-и символов'},
        ]}
      >
        <Input placeholder="Введите свое имя" />
      </Item>

      <Item className="reg-form__gender" name="gender" label="Пол:">
        <Radio.Group className="reg-form__gender-container">
          <Radio value="male">Мужской</Radio>
          <Radio value="female">Женский</Radio>
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

      <Item name="email" label="Email:" rules={[{type: 'email', message: 'Введите корректную почту'}]}>
        <Input placeholder="anonim@gmail.com" />
      </Item>

      <Item
        name="phone"
        label="Телефон:"
        rules={[{pattern: new RegExp(`^\\+?7(\\d{10})$`), message: 'Введите корректный телефон'}]}
      >
        <Input placeholder="+79991114455" />
      </Item>

      <Item>
        <Button>Зарегистрироваться</Button>
        <CustomLink>Уже есть аккаунт? Войти</CustomLink>
      </Item>
    </Form>
  );
}

export default RegForm;
