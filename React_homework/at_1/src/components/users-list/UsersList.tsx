import React from 'react';
import {List, Tooltip} from 'antd';
import UserCard from '../user-card/UserCard';
import {IUserPreview} from '../../types';
import CustomLink from '../custom-link/CustomLink';

const listLayout = {
  gutter: 15,
  xs: 1,
  sm: 2,
  md: 2,
  lg: 3,
  xl: 3,
  xxl: 3,
};

interface IUsersListProps {
  users: IUserPreview[];
  current: number;
  total: number;
  onChange: (page: number) => void;
  isLoading: boolean;
}

function UsersList({users, current, total, onChange, isLoading}: IUsersListProps) {
  return (
    <List
      dataSource={users}
      renderItem={(user) => (
        <List.Item key={user.id} id={`users-item-${user.id}`}>
          <Tooltip
            placement="topLeft"
            title={user.id}
            getPopupContainer={() => document.querySelector(`#users-item-${user.id}`) || document.body}
          >
            <CustomLink to={`/user/${user.id}`}>
              <UserCard user={user} />
            </CustomLink>
          </Tooltip>
        </List.Item>
      )}
      grid={listLayout}
      loading={isLoading}
      pagination={{
        defaultCurrent: 1,
        current,
        total,
        showSizeChanger: false,
        onChange,
        disabled: isLoading,
      }}
    />
  );
}

export default React.memo(UsersList);
