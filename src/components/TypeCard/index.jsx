import React from 'react';
import {Link} from "react-router-dom";
import styles from './TypeCard.module.scss';

const TypeCard = ({name}) => {
  return (
    <div className="col-6 col-md-3 mt-2">
      <div className={styles.otherLinks}>
        <Link to='/light-sp/chandeliers'>
          <img className="img-thumbnail"
               src="https://www.svetodom.ru/published/publicdata/SVETODOMRU/attachments/SC/products_pictures/FR5011CL-08B.jpg"
               alt=""/>
          <h3 className={styles.otherLinksTitle}>
            {name}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default TypeCard;
