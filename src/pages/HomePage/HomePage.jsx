import styles from "./styles.module.css";
import { LinkForNav } from "../../Components/LinkForNav/LinkForNav";

export const HomePage = () => {
  return (
    <div className={styles.welcomePage_container}>
      <h1 className={styles.title}>Добро пожаловать на сайт News Profile</h1>
      <nav className={styles.nav}>
        <LinkForNav to="/news">Новости</LinkForNav>
        <LinkForNav to="/profile">Профиль</LinkForNav>
      </nav>
    </div>
  );
};
