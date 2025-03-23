import { motion } from "motion/react";
import styles from "./Button.module.css";
import { buttonVariants } from "../../assets/animation/buttonAnimation";

export default function Button({ children }) {
  return (
    <motion.button
      className={styles.button}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      {children}
    </motion.button>
  );
}
