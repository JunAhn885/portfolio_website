import styles from "./stylesheets/intro.module.css"
import Image from 'next/image'
import Link from 'next/link'

export default function Intro(){
    return (
        <div className={styles.container}>
            <div className={styles["left-content"]}>
                <h1>Hello, I'm Jun Ahn.</h1>
                <div className={styles.icons}>
                    <Link href="https://www.linkedin.com/in/junahn2/">
                        <Image
                            src="/icons/linkedIn_icon.svg"
                            alt = "LinkedIn Icon"
                            height={50}
                            width={50}
                            className={styles.linkedin}
                        />
                    </Link>
                    <Link href="https://github.com/JunAhn885">
                        <Image
                            src="/icons/github_icon.svg"
                            alt = "GitHub Icon"
                            height={50}
                            width={50}
                            className={styles.github}
                        />
                    </Link>
                </div>
                <a href={"#project-section"}>
                    <Image
                            src="/icons/down_arrow.svg"
                            alt = "Down Arrow"
                            height={50}
                            width={50}
                            className={styles["down-arrow"]}
                            
                        />
                </a>
            </div>
            <div className={styles["right-content"]}>
                <h1><strong>Front-end Developer</strong> passionate about crafting clean code and compelling experiences for the web</h1>
            </div>
        </div>
    )
}