import React, {useContext, useEffect} from 'react';

import Slider from "../../components/Slider";
import Banner from "../../components/Banner";

import banner1 from "../../assets/img/banners/banner1.png"
import banner2 from "../../assets/img/banners/banner2.png"
import styles from './MainPage.module.scss';
import ProductList from "../../components/ProductList";
import TypeCard from "../../components/TypeCard";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchProducts, fetchTypes} from "../../http/productAPI";

const MainPage = observer(() => {
  const {product} = useContext(Context);

  useEffect(() => {
    fetchTypes().then(data => product.setTypes(data));
    fetchProducts().then(data => product.setProducts(data.rows));
  }, []);


  return (
    <div className={styles.content}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Slider/>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-12">

            <div className="contentWrapper">

              <div className={styles.banners}>
                <div className="row">
                  <div className="col-6">
                    <Banner
                      imgUrl={banner1}/>
                  </div>
                  <div className="col-6">
                    <Banner
                      imgUrl={banner2}/>
                  </div>
                </div>
              </div>

              <div className={styles.cardWrapper}>
                <div className={styles.cardTitle}>
                  <h2>Новинки</h2>
                </div>
                <div className="row">

                  <ProductList />

                </div>
              </div>

              <div className="otherProducts mt-5 mb-5">
                <hr/>
                <h2 className="title mb-5">
                  Другие товары по разделам
                </h2>
                <div className="row mb-5">
                  {product.types.map(type =>
                    <TypeCard key={type.id} name={type.name} />
                  )}
                </div>
                <hr/>
              </div>

              <div className={styles.contentDescription}>
                <div className="row">
                  <div className="col-12">
                    <div className="contentDescriptionBanner">
                      <img className="img-fluid" src="https://butterflylc.store/image/cache/catalog/m6-1200x571.jpg"
                           alt=""/>
                    </div>
                    <div className={styles.contentDescriptionText}>
                      <p>
                        Вы задумываетесь о том, где купить люстру, настенный или потолочный светильник? Посетите наш
                        интернет-магазин, выбирайте красивые люстры для любых интерьеров. Каталог наполнен изысканными
                        и современными светильниками, а весь предложенный товар есть в наличии.
                      </p>
                      <b>Ассортимент товара</b>
                      <p>
                        Наш интернет-магазин люстр предлагает широкий ассортимент осветительных приборов. В каталоге
                        есть светильники, оформленные в классическом стиле. Прекрасным выбором станут модели в стиле
                        арт-деко. Можно отдать предпочтение люстрам, оформленным в стиле американской классики.
                      </p>
                      <b>Широкий ассортимент товара включает:</b>
                      <ul>
                        <li>стеклянные, хрустальные и другие люстры;</li>
                        <li>бра разных цветов;</li>
                        <li>настольные лампы;</li>
                        <li>торшеры;</li>
                        <li>элегантные светильники с абажурами.</li>
                      </ul>
                      <p>
                        Распродажа светильников позволяет покупателям выгодно приобретать модели из лучших коллекций
                        российских и европейских брендов. Интернет-магазин люстр - подходящее место для покупки
                        осветительной техники.
                      </p>
                      <b>Наши преимущества</b>
                      <p>
                        Мы закупаем качественные запчасти из Италии, собираем люстры в Москве. Любая люстра может быть
                        собрана по индивидуальному размеру, на этот процесс уходит максимум 3 дня.
                        <br/><br/>

                        Одно из наших преимуществ - бесплатная доставка люстр и светильников по Москве.
                        Транспортировка осветительной техники в пределах 30 км от МКАД тоже может быть бесплатной.
                        Доставка люстр выполняется бесплатно при условии заказа на сумму от 50000 рублей.
                      </p>
                      <b>Покупка товаров в нашем интернет-магазина дает клиентам такие выгоды:</b>
                      <ul>
                        <li>широкий ассортимент осветительной техники;</li>
                        <li>возможность приобрести изделия лучших европейских брендов;</li>
                        <li>разные способы оплаты заказа;</li>
                        <li>услуги сборки светильников по индивидуальным размерам;</li>
                        <li>высокое качество предложенной продукции.</li>
                      </ul>
                      <p>
                        Если вам сложно определиться с моделью осветительной техники, то это не проблема. Опытные
                        специалисты дадут советы по выбору светильников, предложат вам оптимальный вариант.
                        <br/><br/>

                        В нашем онлайн-магазине вы найдете светильники всех стилей, форм. Для заказа товара достаточно
                        заполнить простую онлайн-форму, связаться с менеджером. Желаем вам выгодных покупок!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MainPage;
