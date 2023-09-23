import React from 'react';
import { UserContext } from '../../../GlobalContext';
import styles from './UserProfile.module.css';
import UserSvg from '../UserSvg';

const UserProfile = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className={styles.userProfile}>
      {data.profileImage ? <img src={data.profileImage} /> : <UserSvg />}
      <div>
        <p>{data.fullName}</p>
        <p>{data.cpf}</p>
        <p>{data.email}</p>
        <p>{data.username}</p>
      </div>
    </section>
  );
};

export default UserProfile;
