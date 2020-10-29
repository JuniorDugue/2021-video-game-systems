import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.container}>
      <motion.h1 layoutId="header">Shop</motion.h1>
      <section className={styles["gameSystems-container"]}>
        {/* {["ps5", "xboxs", "switch", "pc"].map((gamesystems) => (
          <Link href={gamesystems}>
            <a>
              <motion.img layoutId={gamesystems} className={styles.image} src={gamesystems + ".jpg"} animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} />
            </a>
          </Link> 
   
        ))}*/}

        {/* <Link href={gamesystems}> */}
          <a>
            <Image src="/ps5.jpg" alt="playstation 5" width={300} height={300}></Image>
          </a>
        {/* </Link> */}
      </section>
    </div>
  );
}
