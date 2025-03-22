import styles from "./HomeDescription.module.css";
import prepod from "/prepod.png";
import prepod2 from "/prepod2.png";
import prepod3 from "/prepod3.png";
import prepod4 from "/prepod4.png";
import prepod5 from "/prepod5.png";

export default function HomeDescription() {
  return (
    <div className={styles.gradient}>
      <div className={styles.background}></div>
      <div className="container">
        <div className={styles.desc_wrapper}>
          <div className={styles.wrapper__title}>
            <h2>Наша команда готова к любым задачам</h2>
          </div>
          <div className={styles.wrapper__subtitle}>
            <h3>Наша команда</h3>
            <p>
              Мы собрали опытных преподавателей и специалистов в IT, дизайне и
              других областях, чтобы помочь студентам раскрыть их потенциал.
            </p>
          </div>
          <div className={styles.wrapper__subtitle}>
            <h3>Наш колледж</h3>
            <p>
              Наш колледж предлагает современное образование и практические
              навыки, которые позволяют создавать качественные проекты и успешно
              начинать карьеру.
            </p>
          </div>
        </div>

        <div className={styles.hero_wrapper}>
          <div className={styles.image_container}>
            <img src={prepod} alt="prepod" className={styles.wrapper__img1} />
            <div className={styles.popup}>
              <h4 className={styles.popup_title}>Сергеева Анна Артемовна</h4>
              <p className={styles.popup_desc}>
                Разработчик веб-приложений с 10 летним опытом
              </p>
            </div>
          </div>
          <div className={styles.image_container}>
            <img src={prepod2} alt="prepod" className={styles.wrapper__img} />
            <div className={styles.popup}>
              <h4 className={styles.popup_title}>Сергеева Анна Артемовна</h4>
              <p className={styles.popup_desc}>
                Разработчик веб-приложений с 10 летним опытом
              </p>
            </div>
          </div>
          <div className={styles.image_container}>
            <img src={prepod3} alt="prepod" className={styles.wrapper__img} />
            <div className={styles.popup}>
              <h4 className={styles.popup_title}>Сергеева Анна Артемовна</h4>
              <p className={styles.popup_desc}>
                Разработчик веб-приложений с 10 летним опытом
              </p>
            </div>
          </div>
          <div className={styles.image_container}>
            <img src={prepod4} alt="prepod" className={styles.wrapper__img} />
            <div className={styles.popup}>
              <h4 className={styles.popup_title}>Сергеева Анна Артемовна</h4>
              <p className={styles.popup_desc}>
                Разработчик веб-приложений с 10 летним опытом
              </p>
            </div>
          </div>
          <div className={styles.image_container}>
            <img src={prepod5} alt="prepod" className={styles.wrapper__img} />
            <div className={styles.popup}>
              <h4 className={styles.popup_title}>Сергеева Анна Артемовна</h4>
              <p className={styles.popup_desc}>
                Разработчик веб-приложений с 10 летним опытом
              </p>
            </div>
          </div>
        </div>
        <div className={styles.gradientStripe}></div>
      </div>
    </div>
  );
}
