import styles from "./HomeCards.module.css";

export default function HomeCards() {
  return (
    <div className={styles.homeCards}>
      <div className="gridLines">
        <div className={styles.homeCards__title}>
          <h2>
            Студенты получают реальный опыт, выполняя проекты под руководством
            наставников
          </h2>
          <div className={styles.cards_container}>
            <div className={styles.card}>
              <div className={styles.card_img}>
                <img src="/cardImage.png" alt="cardImage" />
                <div className={styles.card_overlay}>
                  <div className={styles.overlay_content}>
                    <div className={styles.avatar}></div>
                    <h4>Иван Иванов</h4>
                    <p>Сайт для увековечивания памяти о героях</p>
                  </div>
                </div>
              </div>
              <div className={styles.card_text}>
                <div className={styles.card_text__desc}>
                  <p>Веб-разработка</p>
                </div>
                <div className={styles.card_text__title}>
                  <h3>Книга памяти героям</h3>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.card_img}>
                <img src={cardImage} alt="cardImage" />
                <div className={styles.card_overlay}>
                  <div className={styles.overlay_content}>
                    <div className={styles.avatar}></div>
                    <h4>Петр Петров</h4>
                    <p>Сайт для увековечивания памяти о героях</p>
                  </div>
                </div>
              </div>
              <div className={styles.card_text}>
                <div className={styles.card_text__desc}>
                  <p>Веб-разработка</p>
                </div>
                <div className={styles.card_text__title}>
                  <h3>Книга памяти героям</h3>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.card_img}>
                <img src={cardImage} alt="cardImage" />
                <div className={styles.card_overlay}>
                  <div className={styles.overlay_content}>
                    <div className={styles.avatar}></div>
                    <h4>Алексей Сидоров</h4>
                    <p>Сайт для увековечивания памяти о героях</p>
                  </div>
                </div>
              </div>
              <div className={styles.card_text}>
                <div className={styles.card_text__desc}>
                  <p>Веб-разработка</p>
                </div>
                <div className={styles.card_text__title}>
                  <h3>Книга памяти героям</h3>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.card_img}>
                <img src={cardImage} alt="cardImage" />
                <div className={styles.card_overlay}>
                  <div className={styles.overlay_content}>
                    <div className={styles.avatar}></div>
                    <h4>Мария Кузнецова</h4>
                    <p>Сайт для увековечивания памяти о героях</p>
                  </div>
                </div>
              </div>
              <div className={styles.card_text}>
                <div className={styles.card_text__desc}>
                  <p>Веб-разработка</p>
                </div>
                <div className={styles.card_text__title}>
                  <h3>Книга памяти героям</h3>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.card_img}>
                <img src={cardImage} alt="cardImage" />
                <div className={styles.card_overlay}>
                  <div className={styles.overlay_content}>
                    <div className={styles.avatar}></div>
                    <h4>Елена Смирнова</h4>
                    <p>Сайт для увековечивания памяти о героях</p>
                  </div>
                </div>
              </div>
              <div className={styles.card_text}>
                <div className={styles.card_text__desc}>
                  <p>Веб-разработка</p>
                </div>
                <div className={styles.card_text__title}>
                  <h3>Книга памяти героям</h3>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.card_img}>
                <img src={cardImage} alt="cardImage" />
                <div className={styles.card_overlay}>
                  <div className={styles.overlay_content}>
                    <div className={styles.avatar}></div>
                    <h4>Дмитрий Морозов</h4>
                    <p>Сайт для увековечивания памяти о героях</p>
                  </div>
                </div>
              </div>
              <div className={styles.card_text}>
                <div className={styles.card_text__desc}>
                  <p>Веб-разработка</p>
                </div>
                <div className={styles.card_text__title}>
                  <h3>Книга памяти героям</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
