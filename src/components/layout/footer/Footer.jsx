import styles from './Footer.module.css';
import Logo from '../../../img/logo.svg';
import Navbar from '../../../components/layout/navbar/Navbar';

import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';

const Footer = ({ isSmallScreen }) => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.logo_navbar_container}>
          <img className={styles.logo_img} src={Logo} alt="Logo" />
          <Navbar inFooter={true} isSmallScreen={isSmallScreen} />
        </div>
        <div className={styles.icons_rights_container}>
          <div className={styles.social_icons}>
            <FaFacebook />
            <FaTwitter />
            <FaPinterest />
            <FaInstagram />
          </div>
          <div className={styles.rights_paragraph_container}>
            <p className={styles.rights_paragraph}>
              &#169; 2021 Loopstudios. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
