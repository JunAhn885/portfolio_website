import Header from '../components/header'
import Intro from '../components/intro'
import Project from 'src/components/projects.js'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <Header/>
      <div className={styles.container}>
        <Intro/>
        <Project/>
      </div>  
    </main>
  )
}
