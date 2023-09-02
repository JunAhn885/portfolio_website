import styles from './stylesheets/aboutContent.module.css'
import Image from 'next/image'

export default function AboutContent(){
    return (
        <div className={styles.content}>
            <div className={styles["main-content"]}>
                <div className={styles["left-content"]}>
                    <h1>Hi, I’m Jun Ahn, Front-End Developer Based in Seattle</h1>
                    <h2>I am a graduate from the University of Washington with a background in Informatics and Economics.</h2>
                    <h2>As an aspiring software engineer, I specialize in Front-end development to create function and reactive websites.</h2>
                    <h2>Outside of work, I love cycling, cooking, and exploring new restaurants!</h2>
                </div>
                <Image
                    src = "/icons/images/headshot.svg"
                    alt = "Jun Ahn"
                    width={500}
                    height={554}
                />
            </div>
            <div className={styles["main-languages"]}>
                <h1>Main Languages</h1>
                <h2> React.js, Next.js, JavaScript, Python, CSS, HTML </h2>
            </div>
            <div className={styles["main-skills"]}>
                <h1>Main Skills</h1>
                <h2>Firebase, Agile Software Development, Web Development</h2>
            </div>

            <div className={styles.contact}>
                <h1>I am thrilled to answer your next project &rarr;</h1>
                <h2>junahn45@gmail.com</h2>
            </div>

        </div>
    )
}