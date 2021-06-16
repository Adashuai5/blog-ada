import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import png from '../assets/images/aaa.png'
import { GetServerSideProps } from 'next'
import { UAParser } from 'ua-parser-js'

export default function Home(props: {
  browser: {
    name: string
    major: string
    version: string
  }
}) {
  const { browser } = props
  console.log('browser', browser)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>你当前使用的浏览器是 {browser.name}</p>
        <h1 className={styles.title}>
          <Link href="/posts/flower">
            <a>Flower</a>
          </Link>
        </h1>
        <h1 className={styles.title}>
          <Link href="/posts">
            <a>Blog</a>
          </Link>
        </h1>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const ua = context.req.headers['user-agent']
  const result = new UAParser(ua).getResult()

  return {
    props: {
      browser: result.browser,
    },
  }
}
