import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { LinkForNav } from "../LinkForNav/LinkForNav";

export const Footer = () => {
  return (
    <footer className={styles.header}>
      <div className={styles.container}>
        <Link to="/">News Profile</Link>
        <nav className={styles.nav}>
          <LinkForNav to="/profile">Профиль</LinkForNav>
          <LinkForNav to="/news">Новости</LinkForNav>
        </nav>
      </div>
    </footer>
  );
};
