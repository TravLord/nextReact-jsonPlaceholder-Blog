import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dev News Blog </title>
        <meta name='keywords'></meta>
      </Head>

   <h1>Welcome to Next</h1>
    </div>
  )
}
