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
    </nav>
  );
};

export default Nav;
