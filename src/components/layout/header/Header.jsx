import styles from './Header.module.css';
import Logo from '../../../img/logo.svg';
import Navbar from '../../../components/layout/navbar/Navbar';

import MenuItensMobile from '../menuItensMobile/MenuItensMobile';

const Header = ({
  menuCloseIsVisible,
  menuItensIsVisible,
  setMenuCloseIsVisible,
  setMenuItensIsVisible,
  isSmallScreen,
}) => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.nav_container}>
          <img src={Logo} alt="Logo" />
          <Navbar
            isSmallScreen={isSmallScreen}
            menuCloseIsVisible={menuCloseIsVisible}
            setMenuCloseIsVisible={setMenuCloseIsVisible}
            setMenuItensIsVisible={setMenuItensIsVisible}
          />
          <MenuItensMobile
            menuCloseIsVisible={menuCloseIsVisible}
            menuItensIsVisible={menuItensIsVisible}
            setMenuCloseIsVisible={setMenuCloseIsVisible}
            setMenuItensIsVisible={setMenuItensIsVisible}
            isSmallScreen={isSmallScreen}
          />
        </div>
        <div></div>
        <div className={styles.paragraph_container}>
          <p className={styles.header_paragraph}>
            Immersive experiences that deliver
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
