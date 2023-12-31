import styles from './stylesheets/header.module.css'
import Link from 'next/link'

export default function Header(){
    return (
        <div className={styles.header}>
            <img className={styles.icon} src="/icons/initial.svg" alt="ja icon"></img>
            <ul className={styles["header-list"]}>
                <Link style={{ textDecoration: 'none', marginRight: '30px'}} href="/">Work</Link>
                <Link style={{ textDecoration: 'none', marginRight: '30px' }} href="/about">About</Link>
                <Link style={{ textDecoration: 'none' }} href="/resume">Resume</Link>
            </ul>
        </div>
    )
}