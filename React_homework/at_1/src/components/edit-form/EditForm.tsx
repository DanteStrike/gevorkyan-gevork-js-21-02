/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import moment from 'moment';
import {Form, Input, Select, DatePicker, Upload, Avatar} from 'antd';
import Button from '../submit-button/SubmitButton';
import './EditForm.scss';
import {AntdUtils, FileUtils, ObjectUtils, RequestUtils} from '../../utils';
import {IUser} from '../../types';
import UploadButton from '../upload-button/UploadButton';

interface IEditFormProps {
  user: IUser;
  loading?: boolean;
  onSubmit?: (id: string) => void;
}
interface IEditFormState {
  loading: boolean;
  img: string | null;
}

const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};
const avatarStyle = {width: '100%', height: '100%'};
const {Item} = Form;

function EditForm({user, onSubmit = () => {}, loading}: IEditFormProps) {
  const [avatar, setAvatar] = useState<IEditFormState>({
    loading: false,
    img: user.picture || null,
  });
  const handleAvatarChange = (info: any) => {
    FileUtils.encodeToBase64(info.file.originFileObj, (res) => {
      if (typeof res === 'string' || res instanceof String) {
        setAvatar(
          ObjectUtils.updateObject(avatar, {
            loading: false,
            img: res as string,
          })
        );
      }
    });
  };

  const [form] = Form.useForm();
  const handleFormFinish = (filedValues: {id: string}) => {
    onSubmit(filedValues.id);
  };

  return (
    <Form
      className="edit-form"
      form={form}
      name="edit"
      size="middle"
      layout="vertical"
      onFinish={handleFormFinish}
      initialValues={{
        name: `${user.firstName} ${user.lastName}`.trim(),
        picture: avatar.img,
        gender: user.gender,
        dateOfBirth: moment(user.dateOfBirth),
        email: user.email,
        phone: user.phone,
      }}
    >
      <Item name="picture" label="Аватарка:" valuePropName="file" getValueFromEvent={normFile} noStyle>
        <Upload
          name="avatar"
          listType="picture-card"
          className="edit-form__avatar"
          showUploadList={false}
          accept="image/*"
          beforeUpload={AntdUtils.imageValidator}
          onChange={handleAvatarChange}
          customRequest={RequestUtils.dummyRequest}
        >
          {avatar.img ? <Avatar src={avatar.img} style={avatarStyle} /> : <UploadButton loading={avatar.loading} />}
        </Upload>
      </Item>

      <Item name="name" label="ФИО:" rules={[AntdUtils.requireValidatorName, AntdUtils.userNameValidator]}>
        <Input />
      </Item>

      <Item name="gender" label="Пол:" rules={[AntdUtils.requireValidatorGender]}>
        <Select>
          <Select.Option value="male">Муржской</Select.Option>
          <Select.Option value="female">Женский</Select.Option>
          <Select.Option value="other">Другой</Select.Option>
        </Select>
      </Item>

      <Item
        name="dateOfBirth"
        label="Дата рождения:"
        rules={[AntdUtils.requireValidatorBirth, AntdUtils.sevenYearsOldValidator]}
      >
        <DatePicker
          className="edit-form__date-picker"
          placeholder="Выберите дату"
          disabledDate={AntdUtils.disableDateOverCurrent}
        />
      </Item>

      <Item name="email" label="Email:" rules={[AntdUtils.requireValidatorEmail]}>
        <Input />
      </Item>

      <Item name="phone" label="Телефон:" rules={[AntdUtils.requireValidatorPhone, AntdUtils.phoneFormatValidator]}>
        <Input />
      </Item>

      <Item className="edit-form__last">
        <Button loading={loading}>Сохранить</Button>
      </Item>
    </Form>
  );
}

EditForm.defaultProps = {
  loading: false,
  onSubmit: () => {},
};

export default EditForm;
