import Head from 'next/head'
import styles from '../styles/main.module.scss'
import SearchBar from '../components/SearchBar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>A hundred games</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div className={styles.header}>
          <h2 className={styles.headerTitle}>100 juegos</h2>
          <h4 className={styles.headerSubtitle}>que deberías jugar antes de morir</h4>
          <span className={styles.by}>Por: Dany Belvedere</span>
        </div>

        <div className={styles.contentWrapper}>
          <SearchBar />
        </div>
      </main>

      <footer>
      </footer>

      <style global jsx>{`
        body {
          margin: 0;
          background: black;
        }
      `}</style>
    </div>
  )
}
