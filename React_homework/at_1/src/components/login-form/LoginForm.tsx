import React from 'react';
import './LoginForm.scss';
import {Form, Input} from 'antd';
import Button from '../submit-button/SubmitButton';
import CustomLink from '../custom-link/CustomLink';

interface ILoginFormProps {
  loading?: boolean;
  onSubmit?: (id: string) => void;
}

const {Item} = Form;

function LoginForm({onSubmit = () => {}, loading}: ILoginFormProps) {
  const [form] = Form.useForm();

  const handleFormFinish = (filedValues: {id: string}) => {
    onSubmit(filedValues.id);
  };

  return (
    <Form
      className="login-form"
      form={form}
      name="login"
      size="middle"
      layout="vertical"
      onFinish={handleFormFinish}
      initialValues={{
        id: ``,
      }}
    >
      <Item name="id" label="ID:" rules={[{required: true, message: 'Введите ID'}]}>
        <Input placeholder="Введите свой ID" />
      </Item>

      <Item className="login-form__last">
        <Button loading={loading}>Войти</Button>
        <CustomLink className="login-form__link" to="/registration">
          Еще нет аккаунта? Зарегистрироваться
        </CustomLink>
      </Item>
    </Form>
  );
}

LoginForm.defaultProps = {
  loading: false,
  onSubmit: () => {},
};

export default React.memo(LoginForm);
