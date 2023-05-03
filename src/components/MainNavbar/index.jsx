import React from 'react';
import {Link} from "react-router-dom";
import instagram from "../../assets/img/instagram.svg";
import whatsapp from "../../assets/img/whatsapp.svg";

const MainNavbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-light clear mt-3">
      <div className="container">
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="navbar-brand ms-0">
          <Link to='/'>ЛОГОТИП</Link>
        </div>
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <div className="nav-link">
                <Link to='/shops'>Магазины</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <Link to='/about'>О Нас</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <Link to='/contacts'>Контакты</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <Link to='/delivery'>Доставка и оплата</Link>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <div className="nav-link">
                <img width={25} src={instagram} alt=""/>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <img width={25} src={whatsapp} alt=""/>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link">
                <b><a href="tel:+79999999999">+7 (999) 999-99-99</a></b>
              </div>
            </li>
          </ul>
        </div>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
      </div>
    </nav>
  );
};

export default MainNavbar;
