import styles from "./stylesheets/projects.module.css"
import Image from 'next/image'
import ProjectLeftContent from "./projectLeftContent"

export default function Project() {
    const projects = [
        {
            name: "BeanKeeper",
            description: "Journaling application meant to foster the relationship between parents with new born babies",
            techUsed: ["React", "HTML", "CSS"],
            githubLink: "https://github.com/JunAhn885/I-A-I/tree/main/frontend",
            liveDemoLink : "https://capstone-77b48.web.app/",
            imageLink: "/icons/images/BeanKeeper.svg"
        },
        
        {
            name: "Shoppery - Coming Soon!",
            description: "Ecommerce grocery platform centered around selling natural and organic food-related goods",
            techUsed: ["next.js", "React", "Sass"],
            githubLink: "https://github.com/JunAhn885/I-A-I/tree/main/frontend",
            liveDemoLink : "none",
            imageLink: "/icons/images/shoppery.png"
        },
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
                imageLink={project.imageLink}
            />
        )
    })

    return (
        <div className={styles.project} id={"project-section"}>
            {leftContent}
        </div>
    )
}