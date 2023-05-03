import React from 'react';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={`${styles.sideWrapper} sticky-top clear`}>
      <ul className={styles.sideWrapperLamps}>
        <li>Все люстры</li>
        <li>Бра</li>
        <li>Настольные Лампы</li>
        <li>Торшеры</li>
        <li>Другие светильники</li>
      </ul>
    </div>
  );
};

export default Sidebar;
