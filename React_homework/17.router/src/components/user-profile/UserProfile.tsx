import React from 'react';
import {IUser} from '../../types';
import "./UserProfile.css";

interface IUserProfileProps {
  userProfile: IUser;
}

function UserProfile({userProfile}: IUserProfileProps) {
  const {id, picture, title, firstName, lastName, gender, email, dateOfBirth, registerDate, phone, location} =
    userProfile;
  const {street, city, state, country, timezone} = location;

  return (
    <article className="user-profile">
      <p className="user-profile__col">
        <span className="user-profile__row">
          <span className="user-profile__prop">ID:</span> {id}
        </span>
        <img className="user-profile__img" src={picture} alt={id} />
      </p>
      <p className="user-profile__col">
        <span className="user-profile__title user-profile__title--main">{`${title}. ${firstName} ${lastName}`}</span>
        <span className="user-profile__row">
          <span className="user-profile__prop">Gender:</span> {gender}
        </span>
        <span className="user-profile__row">
          <span className="user-profile__prop">Date of birth:</span> {dateOfBirth}
        </span>
        <span className="user-profile__row">
          <span className="user-profile__prop">Register date:</span> {registerDate}
        </span>
        <span className="user-profile__row">
          <span className="user-profile__prop">Email:</span> {email}
        </span>
        <span className="user-profile__row">
          <span className="user-profile__prop">Phone:</span> {phone}
        </span>
      </p>
      <p className="user-profile__col">
        <span className="user-profile__title">Address</span>
        <span className="user-profile__row">
          <span className="user-profile__prop">State:</span> {state}
        </span>
        <span className="user-profile__row">
          <span className="user-profile__prop">Street:</span> {street}
        </span>
        <span className="user-profile__row">
          <span className="user-profile__prop">City:</span> {city}
        </span>
        <span className="user-profile__row">
          <span className="user-profile__prop">Country:</span> {country}
        </span>
        <span className="user-profile__row">
          <span className="user-profile__prop">Timezone:</span> {timezone}
        </span>
      </p>
    </article>
  );
}

export default UserProfile;
