import { useState } from "react";
import { specialists } from "../../../../assets/info";
import styles from "./Description.module.css";

export default function HomeDescription() {
  const [activePopup, setActivePopup] = useState(null);

  return (
    <>
      <div className={styles.gradient} id="managers"></div>

      <div className={styles.desc_container}>
        <div className="container">
          <div className={styles.desc_wrapper}>
            <div className={styles.desc_wrapper__block}>
              <h2>Наша команда готова к любым задачам</h2>
            </div>

            <div className={styles.about_wrapper}>
              <div className={styles.about_wrapper__block}>
                <h3>Наша команда</h3>
                <p>
                  Мы собрали опытных преподавателей и специалистов в IT, дизайне
                  и других областях, чтобы помочь студентам раскрыть их
                  потенциал.
                </p>
              </div>
              <div className={styles.about_wrapper__block}>
                <h3>Наш колледж</h3>
                <p>
                  Наш колледж предлагает современное образование и практические
                  навыки, которые позволяют создавать качественные проекты и
                  успешно начинать карьеру.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.hero_wrapper}>
            {specialists.map((spec, index) => (
              <div
                className={styles.hero_wrapper__container}
                key={spec.id}
                onMouseEnter={() => setActivePopup(spec.id)}
                onMouseLeave={() => setActivePopup(null)}
              >
                <img
                  src={spec.photo}
                  alt="spec"
                  className={styles.hero_wrapper__img}
                  style={{
                    zIndex: index + 1,
                  }}
                />
                {activePopup === spec.id && (
                  <div className={styles.popup}>
                    <h4 className={styles.popup_title}>{spec.fullname}</h4>
                    <p className={styles.popup_desc}>{spec.area}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <span className={styles.gradientStripe}></span>
      </div>
    </>
  );
}
