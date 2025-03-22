import styles from "./Hometitle.module.css";
import Header from "../../../../../Global/Header/v2/Header";

export default function HomeTitle() {
  const blocks = [
    { id: 1, number: "20+", text: "направлений деятельности" },
    { id: 2, number: "350+", text: "выполненных кейсов" },
    { id: 3, number: "15+", text: "опытных руководителей" },
    { id: 4, number: "100+", text: "довольных клиентов" },
  ];
  return (
    <div className="gridLines">
      <Header />

      <div className={styles.homeTitle_wrapper}>
        <div className={styles.form_background}></div>
        <img src="/hero.png" alt="hero" className={styles.hero} />
        <div className={styles.wrapper__title}>
          <h1>
            Здесь программирование сочетается с творчеством для создания
            уникальных решений
          </h1>
          <button className={styles.button}>Заказать</button>
        </div>
        <div className={styles.blocks_container}>
          {blocks.map((block) => (
            <div
              key={block.id}
              className={`${styles[`block${block.id}`]} ${styles.block}`}
            >
              <h2>{block.number}</h2>
              <p>{block.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
