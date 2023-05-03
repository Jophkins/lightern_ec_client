import React from 'react';
import Card from "../../../components/Card";

import styles from './Lamps.module.scss';

const FloorLamps = ({products}) => {

  const floorsToRender = products.filter((item) => item.type === 'floor').map((item) => {
    return <Card key={item.id} title={item.title} price={item.price} imageUrl={item.imageUrl}/>
  }).reverse();

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="title text-center">Напольные лампы</h2>
            <div className="row">

              {floorsToRender}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorLamps;
