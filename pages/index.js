import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Shop</h1>
      <section className={styles["gameSystems-container"]}>
        {["ps5", "xboxs", "switch", "pc"].map((gamesystems) => (
          <Link href={gamesystems}>
            <a>
              <img className={styles.image} src={gamesystems + ".jpg"} />
            </a>
          </Link>
        ))}
      </section>
    </div>
  );
}
