import React from 'react';
import Card from "../../../components/Card";

import styles from './Chandeliers.module.scss';

const Chandeliers = ({products}) => {

  const chandeliersToRender = products.filter((item) => item.type === 'chandelier').map((item) => {
    return <Card key={item.id} title={item.title} price={item.price} imageUrl={item.imageUrl}/>
  }).reverse();

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="title text-center">Потолочные Люстры</h2>
            <div className="row">

              {chandeliersToRender}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chandeliers;
