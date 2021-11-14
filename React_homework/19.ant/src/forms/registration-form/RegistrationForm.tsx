import React, {useState} from 'react';
import {Form, Input, Button, PageHeader, Select, DatePicker, Alert} from 'antd';
import {useHistory} from 'react-router-dom';
import moment, {Moment} from "moment";
import {IApi, IUser} from '../../types';

interface IRegistrationForm {
  api: IApi;
}

function RegistrationForm({api}: IRegistrationForm) {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false)
  const history = useHistory();

  const handleFormFinish = (filedValues: IUser) => {
    const values = {
      ...filedValues,
      dateOfBirth: (filedValues.dateOfBirth as unknown as Moment).toISOString()
    }

    setIsLoading(true);
    setIsError(false);
    api.createUser(values)
      .then((user) => history.push({pathname: `/user/${user.id}`}))
      .catch(() => {
        setIsLoading(false)
        setIsError(true)
      });
  };

  return (
    <>
      <PageHeader title="Регистрация" onBack={() => history.goBack()} />
      {isError && <Alert message="Email already used" closable type="error"/>}
      <Form
        form={form}
        name="register"
        style={{padding: 5}}
        labelCol={{span: 7}}
        wrapperCol={{span: 11}}
        size="large"
        onFinish={handleFormFinish}
        initialValues={{
          title: `dr`,
          picture: `https://randomuser.me/api/portraits/men/40.jpg`,
          gender: `other`,
          dateOfBirth: moment(`2021-11-01`),
          phone: `+7`,
          location: {
            street: ``,
            city: ``,
            state: ``,
            country: ``,
            timezone: `+0:00`
          }
        }}
      >

        <Form.Item
          name="firstName"
          label="First Name"
          rules={[
            {required: true, message: 'Please input your firstName!', whitespace: true},
            {min: 2, message: 'firstName is shorter than the minimum allowed length (2)'},
            {max: 50, message: 'firstName is longer than the maximum allowed length (50)'},
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[
            {required: true, message: 'Please input your lastName!', whitespace: true},
            {min: 2, message: 'lastName is shorter than the minimum allowed length (2)'},
            {max: 50, message: 'lastName is longer than the maximum allowed length (50)'},
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {type: 'email',  message: 'The input is not valid E-mail!'},
            {required: true, message: 'Please input your E-mail!'},
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="title"
          label="Title"
        >
          <Select>
            <Select.Option value="mr">Mr</Select.Option>
            <Select.Option value="ms">Ms</Select.Option>
            <Select.Option value="mrs">Mrs</Select.Option>
            <Select.Option value="miss">Miss</Select.Option>
            <Select.Option value="dr">Dr</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
        >
          <Select>
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="dateOfBirth"
          label="Date Of Birth"
        >
          <DatePicker disabledDate={(current) => current && current > moment().subtract(7, 'days')}/>
        </Form.Item>

        <Form.Item
          name="picture"
          label="Picture"
          rules={[
            {type: "url", message: "Must be valid url"}
          ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone"
          rules={[
            {pattern: new RegExp(`^\\+?7(\\d{10})$`), message: "Input valid phone"}
          ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          name={[`location`, `street`]}
          label="Street"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={[`location`, `city`]}
          label="City"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={[`location`, `state`]}
          label="State"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={[`location`, `country`]}
          label="Country"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={[`location`, `timezone`]}
          label="Timezone"
        >
          <Select>
            <Select.Option value="-12:00">-12:00</Select.Option>
            <Select.Option value="-11:00">-11:00</Select.Option>
            <Select.Option value="-9:30">-9:30</Select.Option>
            <Select.Option value="-9:00">-9:00</Select.Option>
            <Select.Option value="-8:00">-8:00</Select.Option>
            <Select.Option value="-7:00">-7:00</Select.Option>
            <Select.Option value="-6:00">-6:00</Select.Option>
            <Select.Option value="-5:00">-5:00</Select.Option>
            <Select.Option value="-4:00">-4:00</Select.Option>
            <Select.Option value="-3:30">-3:30</Select.Option>
            <Select.Option value="-2:00">-2:00</Select.Option>
            <Select.Option value="-1:00">-1:00</Select.Option>
            <Select.Option value="+0:00">+0:00</Select.Option>
            <Select.Option value="+1:00">+1:00</Select.Option>
            <Select.Option value="+2:00">+2:00</Select.Option>
            <Select.Option value="+3:00">+3:00</Select.Option>
            <Select.Option value="+3:30">+3:30</Select.Option>
            <Select.Option value="+4:00">+4:00</Select.Option>
            <Select.Option value="+4:30">+4:30</Select.Option>
            <Select.Option value="+5:00">+5:00</Select.Option>
            <Select.Option value="+5:30">+5:30</Select.Option>
            <Select.Option value="+5:45">+5:45</Select.Option>
            <Select.Option value="+6:00">+6:00</Select.Option>
            <Select.Option value="+6:30">+6:30</Select.Option>
            <Select.Option value="+7:00">+7:00</Select.Option>
            <Select.Option value="+8:00">+8:00</Select.Option>
            <Select.Option value="+8:45">+8:45</Select.Option>
            <Select.Option value="+9:00">+9:00</Select.Option>
            <Select.Option value="+9:30">+9:30</Select.Option>
            <Select.Option value="+10:00">+10:00</Select.Option>
            <Select.Option value="+10:30">+10:30</Select.Option>
            <Select.Option value="+11:00">+11:00</Select.Option>
            <Select.Option value="+12:00">+12:00</Select.Option>
            <Select.Option value="+12:45">+12:45</Select.Option>
            <Select.Option value="+13:00">+13:00</Select.Option>
            <Select.Option value="+14:00">+14:00</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item wrapperCol={{offset: 11}}>
          <Button type="primary" htmlType="submit" loading={isLoading}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default RegistrationForm;
