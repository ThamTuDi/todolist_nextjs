import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bài tập của Vân Anh</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Bài tập của Vân Anh
        </h1>
        <div className={styles.grid}>
          <a href="./todolist" className={styles.card}>
            <h2>TodoList &rarr;</h2>
            <p>Bài tập todolist của Vân Anh nha!!!
            </p>
          </a>
        </div>
      </main>

    </div>
  )
}
