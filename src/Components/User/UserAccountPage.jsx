import React from 'react';
import UserSideNav from './UserSideNav';
import { Outlet } from 'react-router-dom';
import styles from './UserAccountPage.module.css';
import UserHeader from './UserHeader';

const UserAccountPage = () => {
  return (
    <section className={`container ${styles.userContainer}`}>
      <UserHeader />
      <UserSideNav />
      <Outlet />
    </section>
  );
};

export default UserAccountPage;
