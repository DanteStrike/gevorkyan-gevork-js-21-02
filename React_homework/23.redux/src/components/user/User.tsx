import React from 'react';
import {Card, Avatar} from 'antd';
import {IUserPreview} from '../../app-types';
import './User.css';

interface IUserProps {
  user: IUserPreview;
}

function User({user}: IUserProps) {
  const {title, firstName, lastName, picture} = user;
  return (
    <Card id="user" className="user" bodyStyle={{padding: 18}}>
      <Card.Meta
        avatar={<Avatar src={picture} shape="square" size={84} />}
        title={<span className="user__name">{`${title}. ${lastName} ${firstName}`}</span>}
      />
    </Card>
  );
}

export default User;
