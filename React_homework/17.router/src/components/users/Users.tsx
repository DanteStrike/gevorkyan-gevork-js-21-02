import React from 'react';
import {IUserPreview} from '../../types';
import User from '../user/User';
import './Users.css';
import Tooltip from '../tooltip/Tooltip';
import CustomLink from '../custom-link/CustomLink';

interface IUsersProps {
  users: IUserPreview[];
}

function Users({users}: IUsersProps) {
  return (
    <ul className="users">
      {users.map((user) => (
        <li className="users__user" key={user.id}>
          <Tooltip text={user.id}>
            <CustomLink to={`/user/${user.id}`}>
              <User user={user} />
            </CustomLink>
          </Tooltip>
        </li>
      ))}
    </ul>
  );
}

export default Users;
