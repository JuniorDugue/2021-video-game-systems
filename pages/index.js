import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Shop</h1>
      <section>
        {['ps5', 'xboxs', 'switch', 'pc'].map((gameSystem) => (
          <img src={gameSystem + '.jpg'}/>
          ))}
      </section>
    </div>
  )
}
