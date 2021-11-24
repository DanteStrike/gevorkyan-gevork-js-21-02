import React from 'react';
import './LoginForm.scss';
import {Form, Input} from 'antd';
import Button from '../button/Button';
import CustomLink from '../custom-link/CustomLink';

const {Item} = Form;

function LoginForm() {
  const [form] = Form.useForm();

  return (
    <Form
      className="login-form"
      form={form}
      name="login"
      size="middle"
      layout="vertical"
      initialValues={{
        id: ``,
      }}
    >
      <Item name="id" label="ID:" rules={[{min: 1, message: 'ID не может пыть пустым'}]}>
        <Input placeholder="Введите свой ID" />
      </Item>

      <Item className="login-form__last">
        <Button>Войти</Button>
        <CustomLink>Еще нет аккаунта? Зарегистрироваться</CustomLink>
      </Item>
    </Form>
  );
}

export default LoginForm;
