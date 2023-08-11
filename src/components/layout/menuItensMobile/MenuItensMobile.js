import { IoMenu } from 'react-icons/io5';
import styles from './MenuItensMobile.module.css';

import { useEffect } from 'react';

export const MenuItensMobile = ({
  menuItensIsVisible,
  setMenuItensIsVisible,
  isSmallScreen,
  setMenuCloseIsVisible,
}) => {
  function handleClick() {
    setMenuCloseIsVisible(true);
    setMenuItensIsVisible(false);
  }

  useEffect(() => {
    if (isSmallScreen) {
      setMenuItensIsVisible(true);
    } else {
      setMenuItensIsVisible(false);
    }
  }, [isSmallScreen, setMenuItensIsVisible]);

  return (
    <>
      {menuItensIsVisible && (
        <div className={styles.menu}>
          <IoMenu size={45} onClick={handleClick} />
        </div>
      )}
    </>
  );
};

export default MenuItensMobile;
