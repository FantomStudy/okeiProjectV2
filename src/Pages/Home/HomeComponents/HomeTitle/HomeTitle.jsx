import { motion } from "framer-motion";
import styles from "./HomeTitle.module.css";
import Header from "../../../../Global/Header/Header";
import hero from "../../../../../public/hero.png";

export function HomeTitle() {
  const blocks = [
    { id: 1, number: "20+", text: "направлений деятельности" },
    { id: 2, number: "350+", text: "выполненных кейсов" },
    { id: 3, number: "15+", text: "опытных руководителей" },
    { id: 4, number: "100+", text: "довольных клиентов" },
  ];

  return (
    <div className="gridLines">
      <Header />

      <motion.div className={styles.homeTitle_wrapper}>
        <motion.div
          className={styles.animatedBackground}
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          animate={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: blocks.length * 0.5 + 0.5,
          }}
        />
        <img src={hero} alt="hero" className={styles.hero} />
        <motion.div
          className={styles.wrapper__title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <h1>
            Здесь программирование сочетается с творчеством для создания
            уникальных решений
          </h1>
          <motion.button
            className={styles.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Заказать
          </motion.button>
        </motion.div>
        <div className={styles.blocks_container}>
          {blocks.map((block, index) => (
            <motion.div
              key={block.id}
              className={styles[`block${block.id}`]}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 1 + index * 0.5,
              }}
            >
              <h2>{block.number}</h2>
              <p>{block.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
