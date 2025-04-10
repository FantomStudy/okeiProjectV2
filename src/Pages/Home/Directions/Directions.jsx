import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import styles from "./Directions.module.css";
import { directions, directionImages } from "../../../assets/info";

export default function Directions() {
  const [activeDirection, setActiveDirection] = useState("Веб-разработка");
  const [itemHeight, setItemHeight] = useState(86);

  const updateItemHeight = () => {
    const width = window.innerWidth;
    if (width <= 450) {
      setItemHeight(50);
    } else if (width <= 840) {
      setItemHeight(60);
    } else {
      setItemHeight(86);
    }
  };

  useEffect(() => {
    updateItemHeight();
    window.addEventListener("resize", updateItemHeight);
    return () => window.removeEventListener("resize", updateItemHeight);
  }, []);

  const handleClick = (direction) => {
    setActiveDirection(direction);
  };

  const topPosition = directions.indexOf(activeDirection) * itemHeight;

  return (
    <div className="container" id="directions">
      <motion.div
        className={styles.wrapper}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div className={styles.wrapper__photo}>
          <AnimatePresence mode="wait">
            <motion.img
              key={activeDirection} // Ключ меняется при смене направления
              src={directionImages[activeDirection]}
              alt={activeDirection}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </motion.div>

        <div className={styles.wrapper__info}>
          <motion.div
            className={styles.background}
            style={{
              top: `${topPosition}px`,
              height: itemHeight,
            }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          />
          <motion.div
            className={styles.indicator}
            style={{
              top: `${topPosition}px`,
              height: itemHeight,
            }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          />
          {directions.map((direction, index) => (
            <motion.p
              key={direction}
              onClick={() => handleClick(direction)}
              style={{
                height: itemHeight,
              }}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, x: -20 }}
              viewport={{ once: true }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: index * 0.15 },
              }}
            >
              {direction}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
