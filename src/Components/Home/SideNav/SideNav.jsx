import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideNav.module.css';

const SideNav = () => {
  return (
    <aside className={styles.sideNavContainer}>
      <nav className={styles.sideNavWrapper}>
        <ul className={styles.sideNav}>
          <li>
            <NavLink>Woman’s Fashion</NavLink>
          </li>
          <li>
            <NavLink>Men’s Fashion</NavLink>
          </li>
          <li>
            <NavLink>Electronics</NavLink>
          </li>
          <li>
            <NavLink>Home & Lifestyle</NavLink>
          </li>
          <li>
            <NavLink>Home & Lifestyle</NavLink>
          </li>
          <li>
            <NavLink>Baby’s & Toys</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
