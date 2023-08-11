import { IoClose } from 'react-icons/io5';
import styles from './MenuCloseMobile.module.css';

export const MenuCloseMobile = ({
  menuCloseIsVisible,
  setMenuCloseIsVisible,
  setMenuItensIsVisible,
  isSmallScreen,
}) => {
  function handleClick() {
    setMenuCloseIsVisible(false);
    setMenuItensIsVisible(true);
  }

  return (
    <>
      {menuCloseIsVisible && isSmallScreen && (
        <div className={styles.menu}>
          <IoClose size={30} onClick={handleClick} style={{ fill: 'white' }} />
        </div>
      )}
    </>
  );
};

export default MenuCloseMobile;
