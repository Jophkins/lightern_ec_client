import React from 'react';
import styles from './Card.module.scss';
import { useNavigate } from "react-router-dom";

const Card = ({id, title, price, imageUrl}) => {

  const navigate = useNavigate();
  return (
    <div className="col-6 col-md-3 mt-4">
      <div className={styles.cardItem}>
        <img
             width='213'
             height='213'
             onClick={() => navigate('/light-sp/product/' + id)}
             src={process.env.REACT_APP_API_URL + imageUrl}
             alt=""/>
        <h5>{title}</h5>
        <div className={styles.cardItemBottom}>
          <div>
            <b>{price} руб.</b>
          </div>
          <div className={styles.cardItemBottomBtn}>
            <button onClick={() => navigate('/light-sp/product/' + id)}>
              Просмотреть / Купить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
