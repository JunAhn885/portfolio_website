import styles from "./stylesheets/projects.module.css"
import Image from 'next/image'
import ProjectLeftContent from "./projectLeftContent"

export default function Project() {
    const projects = [
        {
            name: "BeanKeeper",
            description: "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
            techUsed: ["React", "HTML", "CSS"],
            githubLink: "https://github.com/JunAhn885/I-A-I/tree/main/frontend",
            liveDemoLink : "https://capstone-77b48.web.app/"
        }
    ]

    const leftContent = projects.map((project, index) => {
        return (
            <ProjectLeftContent 
                index={index} 
                name={project.name} 
                description={project.description} 
                techUsed={project.techUsed}  
                githubLink={project.githubLink}
                liveDemoLink={project.liveDemoLink}
            />
        )
    })

    return (
        <div className={styles.project}>
            {leftContent}
            <Image
                src = "/icons/images/BeanKeeper.svg"
                alt = "BeanKeeper"
                width={637}
                height={383}
                className={styles.image}
            />
        </div>
    )
}