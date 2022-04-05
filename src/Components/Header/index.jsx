import React from 'react';
import './style.css';
import logo from '../../img/logoSos.png';
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
            <Link className="nav-link" to="/cadastro" >
              Cadastrar/Logar
            </Link>
          </li>
        </ul>
      </nav>

      <div className="banner">
        <img
          src="https://media.istockphoto.com/photos/architecture-from-marco-zero-square-in-recife-downtown-picture-id1162468341?b=1&k=20&m=1162468341&s=170667a&w=0&h=_v6JqjFA6MuzQxFsYu5LS7VwBM-l0dUIrtmr2_vpUHY="
          alt=""
        />
      </div>
      <blockquote className="blockquote p-4">
        <h1 className="display-1">
          <em>Os melhores roteiros para você.</em>
        </h1>
      </blockquote>
    </header>
  );
};

export default Header;
