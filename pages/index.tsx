import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import png from '../assets/images/aaa.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello{' '}
          <Link href="/posts/flower">
            <a>flower</a>
          </Link>
        </h1>

        <Link href="/posts/index">
          <a>FirstPage</a>
        </Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src={png} alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
