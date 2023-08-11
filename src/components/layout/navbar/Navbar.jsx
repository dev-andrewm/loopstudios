import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = ({ isSmallScreen, menuCloseIsVisible, inFooter = false }) => {
  console.log(isSmallScreen);
  return (
    <>
      <nav
        className={
          isSmallScreen
            ? menuCloseIsVisible
              ? `${styles.navbar_mobile}`
              : inFooter
              ? `${styles.navbar_in_footer}`
              : `${styles.display_none}`
            : ''
        }
      >
        <ul
          className={
            isSmallScreen
              ? menuCloseIsVisible
                ? `${styles.list_mobile}`
                : inFooter
                ? `${styles.list_mobile}`
                : ''
              : `${styles.list}`
          }
          style={isSmallScreen ? { margin: '35px 0' } : {}}
        >
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Careers</NavLink>
          </li>
          <li>
            <NavLink to="/">Events</NavLink>
          </li>
          <li>
            <NavLink to="/">Products</NavLink>
          </li>
          <li>
            <NavLink to="/">Support</NavLink>
          </li>
        </ul>
      </nav>

      {/* {((isSmallScreen && menuCloseIsVisible) || !isSmallScreen) && (
        <nav className={isSmallScreen ? `${styles.navbar_mobile}` : ''}>
          <ul
            className={
              isSmallScreen
                ? `${styles.list_mobile}`
                : `${styles.list} ${inFooter ? styles.list_in_footer : ''}`
            }
          >
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/">Careers</NavLink>
            </li>
            <li>
              <NavLink to="/">Events</NavLink>
            </li>
            <li>
              <NavLink to="/">Products</NavLink>
            </li>
            <li>
              <NavLink to="/">Support</NavLink>
            </li>
          </ul>
        </nav>
      )} */}
    </>
  );
};

export default Navbar;
