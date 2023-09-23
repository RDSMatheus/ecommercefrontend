import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '../../assets/logo.svg';
import Search from '../../assets/search_icon.svg';
import Hearth from '../../assets/heart.svg';
import Cart from '../../assets/cart.svg';
import { UserContext } from '../../GlobalContext';

const Header = () => {
  const [search, setSearch] = React.useState('');
  const { userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <div className={styles.headerTopBarBackground}>
        <div className={`${styles.headerTopBar} container`}>
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <Link>Shop Now!</Link>
        </div>
      </div>
      <nav className={`${styles.headerNav} container`}>
        <img src={Logo} alt="Logo" />
        <ul className={styles.headerNavBar}>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/register"
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
        <div className={styles.userNav}>
          <form className={styles.search}>
            <input
              type="text"
              value={search}
              onChange={({ target }) => setSearch(target.value)}
            />
            <button>
              <img src={Search} alt="Lupa" />
            </button>
          </form>
          <button>
            <img src={Hearth} alt="Favorito" />
          </button>
          <button>
            <img src={Cart} alt="Carrinho" />
          </button>
        </div>
        <button
          onClick={() => {
            userLogout();
          }}
        >
          Sair
        </button>
      </nav>
    </header>
  );
};

export default Header;
