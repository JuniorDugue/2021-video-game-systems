import Link from "next/link";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Shop</h1>
      <section className={styles["gameSystems-container"]}>
        {["ps5", "xboxs", "switch", "pc"].map((gamesystems) => (
          <Link href={gamesystems}>
            <a>
              <motion.img 
              className={styles.image} 
              src={gamesystems + ".jpg"}
              animate={{scale: 1}}
              whileHover={{scale: 1.1}}
               />
            </a>
          </Link>
        ))}
      </section>
    </div>
  );
}
