import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import Card from "../Card";

const ProductList = observer(() => {
  const {product} = useContext(Context);

  return (
    <div className="row">
      {product.products.map(product =>
        <Card key={product.id}
              id={product.id}
              title={product.name}
              price={product.price}
              imageUrl={product.img}
        />
      ).reverse().splice(0, 8)}
    </div>
  );
});

export default ProductList;
