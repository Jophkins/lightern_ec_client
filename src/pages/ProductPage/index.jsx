import React, {useContext, useEffect, useState} from 'react';
import leftArrow from '../../assets/img/left-arrow.svg';
import styles from './ProductPage.module.scss';
import {useParams} from "react-router-dom";
import {deleteProduct, fetchOneProduct} from "../../http/productAPI";
import { useNavigate } from "react-router-dom";
import {Context} from "../../index";

const ProductPage = () => {
  const {basketProduct, user} = useContext(Context);
  const navigate = useNavigate();
  const [product, setProduct] = useState({info: []});
  const [countNumber, setCountNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [button, setButton] = useState(true);
  const {id} = useParams();

  useEffect(() => {
    fetchOneProduct(id).then(data => {
      return data ? setProduct(data) : navigate('/light-sp/')
    }).catch(err => {
      console.log('Произошла ошибка. Свяжитесь с технической поддержкой')
    }).finally(() => {
      setLoading(false)
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addToBasket = () => {
    basketProduct.setBasketProducts([...basketProduct.basketProducts, {...product, count: Number(countNumber), priceTotal: Number(countNumber) * product.price}]);
    setButton(false);
  }

  const removeProduct = (id) => {
    deleteProduct(id).then(data => alert(`Продукт удален. Обновите страницу.`));
    navigate(-1);
  }

  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <button className={`${styles.backBtn} mb-5`} onClick={() => navigate(-1)}><img width={25} src={leftArrow} alt=""/> Вернуться назад</button>
            </div>
            <div className="col-6 text-end">
              {(user.isAuth) ?
                <button className="mb-2" onClick={() => removeProduct(id)}>Удалить товар</button>
                :
                null
              }
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className={styles.leftSide}>
                <img className='img-fluid'
                     src={process.env.REACT_APP_API_URL + product.img}
                     alt=""/>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className={styles.rightSide}>
                <div className={styles.rightSideTitle}>
                  {product.name} {product.article}
                  <hr/>
                </div>
                <div className={styles.rightSidePrice}>
                  <span className='price'>{product.price} руб.</span>
                  <div className={styles.rightSidePriceBtn}>
                    <input className={styles.numberInput} onChange={e => setCountNumber(e.target.value)} type="number" value={countNumber} min={1}/>
                    {button ? <button onClick={() => addToBasket()}>Добавить в корзину / Оформить заказ</button> : <div>Готово</div>}
                    {/*<button onClick={() => addToBasket()}>Добавить в корзину / Оформить заказ</button>*/}
                  </div>
                  <hr/>
                  <div className="descTable">
                    <table>
                      <tbody>
                      {product.info.map(info =>
                        <tr key={info.id}>
                          <td>{info.title}</td>
                          <td>{info.description ? info.description : '-'}</td>
                        </tr>
                      )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
