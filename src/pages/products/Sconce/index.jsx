import React from 'react';
import Card from "../../../components/Card";

import styles from './Sconce.module.scss';

const Sconce = ({products}) => {

  const sconceToRender = products.filter((item) => item.type === 'sconce').map((item) => {
    return <Card key={item.id} title={item.title} price={item.price} imageUrl={item.imageUrl}/>
  }).reverse();

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="title text-center">Бра</h2>
            <div className="row">

              {sconceToRender}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sconce;
