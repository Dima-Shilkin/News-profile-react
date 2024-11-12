import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { LinkForNav } from "../LinkForNav/LinkForNav";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">News Profile</Link>
        <nav className={styles.nav}>
          <LinkForNav to="/profile">Профиль</LinkForNav>
          <LinkForNav to="/news">Новости</LinkForNav>
        </nav>
      </div>
    </header>
  );
};
