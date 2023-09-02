import styles from "./stylesheets/intro.module.css"
import Image from 'next/image'

export default function Intro(){
    return (
        <div className={styles.container}>
            <div className={styles["left-content"]}>
                <h1>Hello I'm Jun Ahn.</h1>
                <div className={styles.icons}>
                    <Image
                        src="/icons/linkedIn_icon.svg"
                        alt = "LinkedIn Icon"
                        height={50}
                        width={50}
                    />
                    <Image
                        src="/icons/github_icon.svg"
                        alt = "GitHub Icon"
                        height={50}
                        width={50}
                    />
                </div>
                <Image
                        src="/icons/down_arrow.svg"
                        alt = "Down Arrow"
                        height={50}
                        width={50}
                        className={styles["down-arrow"]}
                    />
            </div>
            <div className={styles["right-content"]}>
                <h1>Front-end Developer passionate about crafting clean code and compelling experiences for the web</h1>
            </div>
        </div>
    )
}