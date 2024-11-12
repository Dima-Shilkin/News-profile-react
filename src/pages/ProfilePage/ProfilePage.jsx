import { useEffect, useState } from "react";
import { getUser } from "../../api/api";
import styles from "./styles.module.css";
import Loading from "../../Components/Loading/Loading";

export const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await getUser();
        setUser(resp);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className={styles.userConteiner}>
      <h2>Данные вашего профиля</h2>
      {user ? (
        <ul className={styles.list}>
          <li>Имя: {user.name}</li>
          <li>Email: {user.email}</li>
          <li>Телефон: {user.phone}</li>
          <li>Город: {user.address.city}</li>
          <li>Улица: {user.address.street}</li>
        </ul>
      ) : (
        <Loading />
      )}
    </div>
  );
};
