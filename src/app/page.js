import Header from '../components/header'
import Intro from '../components/intro'
import Project from 'src/components/projects.js'
import styles from './page.module.css'
import Head from 'next/head';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Work</title>
      </Head>
      
      <Header/>
      <div className={styles.container}>
        <Intro/>
        <div className={styles.project}>
          <Project/>
        </div>
      </div>  
      <Footer/>
    </>
  )
}
