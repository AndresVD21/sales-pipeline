import { NavLink } from 'react-router-dom';
import styles from './nav.module.scss';

/* eslint-disable-next-line */
export interface NavProps {
  children?: JSX.Element;
}

export const Nav: React.FC<NavProps> = ({ children }) => {
  return (
    <nav className={styles['nav']}>
      <img src="/assets/logo.png" alt="logo" className={styles['nav__logo']} />
      {children}
      <ul className={styles['nav__list']}>
        <li className={styles['nav__list__item']}>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? `${styles['nav__list__item__link']} ${styles['link-active']}`
                : styles['nav__list__item__link']
            }
          >
            Home
          </NavLink>
        </li>
        <li className={styles['nav__list__item']}>
          <NavLink
            to="/convert"
            className={({ isActive }) =>
              isActive
                ? `${styles['nav__list__item__link']} ${styles['link-active']}`
                : styles['nav__list__item__link']
            }
          >
            Convert
          </NavLink>
        </li>
        <li className={styles['nav__list__item']}>
          <NavLink
            to="/prospects"
            className={({ isActive }) =>
              isActive
                ? `${styles['nav__list__item__link']} ${styles['link-active']}`
                : styles['nav__list__item__link']
            }
          >
            Prospects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
