import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function GameSystem() {
  const {
    query: { gamesystems },
  } = useRouter();
  return (
    <div className={styles.container}>
      <motion.h1 layoutId="header">{gamesystems}</motion.h1>
      <motion.img layoutId={gamesystems} className={styles["big-image"]} src={gamesystems + ".jpg"} />
    </div>
  );
}
