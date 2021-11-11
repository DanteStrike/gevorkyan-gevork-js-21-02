import React from 'react';
import {List, Tooltip} from 'antd';
import {IUserPreview} from '../../types';
import User from '../user/User';
import './Users.css';
import CustomLink from '../custom-link/CustomLink';

interface IUsersProps {
  users: IUserPreview[];
}

function Users({users}: IUsersProps) {
  return (
    <List
      id="users"
      grid={{gutter: 18, column: 2, sm: 1, xs: 1}}
      dataSource={users}
      renderItem={(user) => (
        <List.Item id={`users-item-${user.id}`}>
          <Tooltip
            placement="topLeft"
            title={user.id}
            getPopupContainer={() => document.querySelector(`#users-item-${user.id}`) || document.body}
          >
            <CustomLink to={`/user/${user.id}`}>
              <User user={user} />
            </CustomLink>
          </Tooltip>
        </List.Item>
      )}
    />
  );
}

export default Users;
