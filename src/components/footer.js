import styles from "./stylesheets/footer.module.css"
import Link from 'next/link'

export default function Footer(){
    return (
        <div className={styles.footer}>
            <p>Jun Ahn - 2023</p>
            <p>Want to see codebase for this website? Click on this <Link href="https://github.com/JunAhn885/portfolio_website">link</Link></p>
        </div>
    )
}