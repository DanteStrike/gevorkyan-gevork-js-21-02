/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import moment, {Moment} from 'moment';
import {Form, Input, Select, DatePicker, Upload, Avatar} from 'antd';
import Button from '../submit-button/SubmitButton';
import './EditForm.scss';
import {AntdUtils, DateUtils, FileUtils, ObjectUtils, RequestUtils} from '../../utils';
import {IUser, IUserUpdate, UserGenderType} from '../../types';
import UploadButton from '../upload-button/UploadButton';

interface IEditFormProps {
  user: IUser;
  loading?: boolean;
  onSubmit?: (data: IUserUpdate) => void;
}
interface IEditFormState {
  loading: boolean;
  img: string | null;
}
interface IEditForm {
  name: string,
  gender: UserGenderType,
  dateOfBirth: Moment,
  phone: string,
}

const normFile = (e: any) => {
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
  const handleFormFinish = (filedValues: IEditForm) => {
    const normName = DateUtils.normalizeName(filedValues.name);
    const userUpdate: IUserUpdate = {
      id: user.id,
      firstName: normName.firstName,
      lastName: normName.lastName,
      picture: avatar.img || user.picture || ``,
      gender: filedValues.gender,
      dateOfBirth: filedValues.dateOfBirth.toISOString(),
      phone: filedValues.phone
    }

    onSubmit(userUpdate);
  };

  return (
    <Form
      className="edit-form"
      form={form}
      name="edit"
      size="middle"
      layout="vertical"
      validateTrigger="submit"
      onFinish={handleFormFinish}
      initialValues={{
        name: DateUtils.collectName(user.firstName, user.lastName),
        picture: avatar.img,
        gender: user.gender,
        dateOfBirth: moment(user.dateOfBirth),
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
