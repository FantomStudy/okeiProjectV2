import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footer_wrapper}>
          <img src="/logoOKEI.svg" alt="logoOKEI" className={styles.img} />

          <div className={styles.nav}>
            <p>Руководители</p>
            <p>Направления</p>
            <p>Работы</p>
            <p>Заявка</p>
          </div>
          <div className={styles.contacts}>
            <a href="mailto:oksei24@mail.ru">oksei24@mail.ru</a>
            <a href="tel:55-55-55">55-55-55</a>
          </div>
        </div>
      </div>
    </div>
  );
}
