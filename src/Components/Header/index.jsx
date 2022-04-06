import React from 'react';
import './style.css';
import logo from '../../img/Vector.svg';
import banner from '../../img/banner.png';
import { Link } from 'react-router-dom';
import Filter from '../Filter';

const Header = () => {
  return (
    <header>
      <nav className="navbar d-flex justify-content-between p-5">
        <div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Nossa proposta
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cadastro">
              Cadastrar/Logar
            </Link>
          </li>
        </ul>
      </nav>

      <div className="banner">
        <div className="image">
          <img src={banner} alt="" />
        </div>
        <blockquote className="blockquote p-4 ">
          <h1 >
            <em>Os melhores roteiros para você.</em>
          </h1>
        </blockquote>
      </div>
    </header>
  );
};

export default Header;
