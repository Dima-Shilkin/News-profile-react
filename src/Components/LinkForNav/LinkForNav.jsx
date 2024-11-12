import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

export const LinkForNav = ({ to, children }) => {
  const setActive = ({ isActive }) =>
    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;

  return (
    <NavLink className={setActive} to={to}>
      {children}
    </NavLink>
  );
};
