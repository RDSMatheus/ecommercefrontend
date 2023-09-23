import React from 'react';
import Logo from '../../assets/logo_w.svg';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerBg}>
      <div className={`${styles.footer} container`}>
        <div>
          <img src={Logo} alt="Logo" style={{ fill: '#fff' }} />
        </div>
        <div>
          <h3>Suporte</h3>
          <ul>
            <li>Rua Logo Ali</li>
            <li>São Gonçalo</li>
            <li>279999999</li>
          </ul>
        </div>
        <div>
          <h3>Conta</h3>
          <ul>
            <li>
              <Link to="/myaccount">Minha Conta</Link>
            </li>
            <li>
              <Link to="/register">Login/Register</Link>
            </li>
            <li>
              <Link>Carrinho</Link>
            </li>
            <li>
              <Link>Lista de Desejos</Link>
            </li>
            <li>
              <Link>Carrinho</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Quick Link</h3>
          <ul>
            <li>
              <Link>Politica de Privacidade</Link>
            </li>
            <li>
              <Link>Termos de Uso</Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Contato</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Download App</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
