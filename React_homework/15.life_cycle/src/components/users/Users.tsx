import React from 'react';
import {IUserPreview} from '../../types';
import User from '../user/User';
import './Users.css';

interface IUsersProps {
  users: IUserPreview[];
}

function Users({users}: IUsersProps) {
  return (
    <ul className="users">
      {users.map((user) => (
        <li className="users__user" key={user.id}>
          <User user={user} />
        </li>
      ))}
    </ul>
  );
}

export default Users;
