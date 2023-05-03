import React from 'react';
import styles from './Banner.module.scss';

const Banner = ({imgUrl}) => {
  return (
    <div className={styles.bannersWrapper}>
      <img className="img-fluid"
           src={imgUrl}
           alt=""/>
      <div className={styles.bannersWrapperContent}>
        <div className="bannerContentTitle">
          БАННЕР С ТЕКСТОМ
        </div>
      </div>
    </div>
  );
};

export default Banner;
