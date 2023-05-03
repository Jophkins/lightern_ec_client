import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import bagDash from '../../assets/img/bag-dash.svg';
import {Context} from "../../index";
import {fetchTypes} from "../../http/productAPI";

const SecondNavbar = () => {
  const {product} = useContext(Context);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetchTypes().then(data => product.setTypes(data)).then(() => setIsLoading(false));
  }, [product]);

  return (
    <nav className="navbar sticky-top navbar-expand-md bg-light clear m-2 p-2">
      <div className="container">
        <div className="navbar-collapse collapse" id="navbarSupportedContent2">
          <ul className="navbar-nav me-0 ms-5 mb-2 mb-md-0">
            <li className="nav-item">
              <input className="form-control" type="search" placeholder="Поиск" aria-label="Search"/>
            </li>
          </ul>
          <ul className="navbar-nav me-auto ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <div className="nav-link">
                <Link to='/'>Главная</Link>
              </div>
            </li>
            {(isLoading ? null : product._types.map(item => (
                <li key={item.id} className="nav-item">
                  <div className="nav-link">
                    <Link to={`/${item.name}`}>{item.name}</Link>
                  </div>
                </li>
              )))}
          </ul>
          <ul className="navbar-nav me-5 ms-0">
            <li className="nav-item">
              <div className="nav-link">
                <Link to='/basket'>
                  <img width={25} src={bagDash} alt=""/>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SecondNavbar;
