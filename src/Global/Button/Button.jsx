import { motion } from "motion/react";
import styles from "./Button.module.css";
import { buttonVariants } from "../../assets/headerAnimation";

export default function Button({ children }) {
  return (
    <motion.button
      className={styles.button}
      variants={buttonVariants}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
