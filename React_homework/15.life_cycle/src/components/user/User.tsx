import React from 'react';
import {IUserPreview} from '../../types';
import './User.css';

interface IUserProps {
  user: IUserPreview;
  setTooltipText: (text: string) => void;
}

class User extends React.PureComponent<IUserProps> {
  componentDidMount(): void {
    const {user, setTooltipText} = this.props;
    setTooltipText(user.id);
  }

  render(): React.ReactNode {
    const {user} = this.props;
    const {title, firstName, lastName, picture} = user;

    return (
      <article className="user">
        <img className="user__image" src={picture} alt={`${lastName} ${firstName}`} />
        <h2 className="user__name">{`${title}. ${lastName} ${firstName}`}</h2>
      </article>
    );
  }
}

export default User;
