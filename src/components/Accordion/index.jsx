import {React, useState, useContext, useEffect} from 'react';
import styles from "./Accordion.module.scss"
import {fetchOneOrder, fetchOrders} from "../../http/orderAPI";
import {Context} from "../../index";

const Accordion = () => {

  const {order} = useContext(Context);
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders().then(data => {
      return data ? order.setOrders(data) : null;
    }).catch(err => {
      console.log('Произошла ошибка. Свяжитесь с технической поддержкой')
    }).finally(() => {
      setLoading(false)
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // console.log(order.orders.map(i => i.info.filter(j => j.orderId === 1)).find(i => i.length))

  const accordToggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  const ordersList = order.orders.map((item, i) => {
      return (
        <div className={styles.item} key={i}>
          <div className={styles.title} onClick={() => accordToggle(i)}>
            <h2>{`Заказ №${item.id}`}</h2>
            <span>{selected === i ? '-' : '+'}</span>
          </div>
          <div className={selected === i ? `${styles.content} ${styles.show}` : styles.content}>
            {`Имя: ${item.customerName}, телефон: ${item.phone}`}
          </div>
        </div>
      )
    })

  return (
    <div className='accordion'>
      {ordersList}
    </div>
  );
};

export default Accordion;
