import React from 'react';
import {IUserPreview} from '../../types';
import User from '../user/User';
import './Users.css';
import withTooltip from '../../hoc/with-tooltip/with-tooltip';
import withOpen from '../../hoc/with-hover/with-open';

interface IUsersProps {
  users: IUserPreview[];
}

const UserWrapped = withOpen(withTooltip(User));

function Users({users}: IUsersProps) {
  return (
    <ul className="users">
      {users.map((user) => (
        <li className="users__user" key={user.id}>
          <UserWrapped user={user} />
        </li>
      ))}
    </ul>
  );
}

export default Users;
