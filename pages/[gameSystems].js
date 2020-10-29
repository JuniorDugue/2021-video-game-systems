import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function GameSystem() {
  const {
    query: {gamesystems},
  } = useRouter();
  return (
    <div className={styles.container}>
      <h1>{gamesystems}</h1>
      <img className={styles.image} src={gamesystems + ".jpg"} />
    </div>
  );
}
