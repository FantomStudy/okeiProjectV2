import { motion } from "motion/react";
import styles from "./Hero.module.css";
import Header from "../../../../Global/Header/Header";
import Button from "../../../../Global/Button/Button";
import { heroBlocks as blocks } from "../../../../assets/mapInfo";
import {
  backgroundVariants,
  infoVariants,
  blockContainerVariants,
  blockVariants,
} from "../../../../assets/animation/heroAnimation";

export default function Hero() {
  return (
    <div className="gridLines">
      <Header />

      <div className={styles.hero_wrapper}>
        <motion.div
          className={styles.background_container}
          initial="hidden"
          whileInView="visible"
          variants={backgroundVariants}
          viewport={{ once: true }}
        >
          <div className={styles.background_mask}>
            <div className={styles.background_image}></div>
          </div>

          <motion.div
            className={styles.block_container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={blockContainerVariants}
          >
            {blocks.map((block, index) => (
              <motion.div
                key={block.id}
                className={`${styles[`block${block.id}`]} ${styles.block}`}
                custom={index}
                variants={blockVariants}
              >
                <h2>{block.number}</h2>
                <p>{block.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <img src="/hero.png" alt="hero" className={styles.hero} />
        </motion.div>

        <motion.div
          className={styles.info_wrapper}
          initial="hidden"
          whileInView="visible"
          variants={infoVariants}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1>
            Здесь программирование сочетается с творчеством для создания
            уникальных решений
          </h1>
          <Button>Заказать</Button>
        </motion.div>
      </div>
    </div>
  );
}
