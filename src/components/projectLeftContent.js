import Image from "next/image";
import styles from "./stylesheets/projectLeftContent.module.css";

export default function ProjectLeftContent({
  index,
  name,
  description,
  techUsed,
  githubLink,
  liveDemoLink,
  imageLink,
}) {
  // dictionary data structure to hold all the links to the tech icons
  // all keys are lowercase - data processing needed
  const techIconLinks = {
    react: "/icons/React.svg",
    css: "/icons/css.svg",
    html: "/icons/html.svg",
    javascript: "/icons/JavaScript.svg",
    "next.js": "/icons/next-js.svg",
    sass: "/icons/sass.svg",
    firebase: "/icons/firebase.svg",
    typescript: "/icons/TypeScript.svg",
  };

  // return Image component with a matching icon
  const techStacks = techUsed.map((tech) => {
    // data processing to lowercase to match keys in the techIconLinks dict
    tech = tech.toLowerCase();

    return (
      <Image
        src={`${techIconLinks[tech]}`}
        alt={`${tech}`}
        width={70}
        height={61}
        className={styles["tech-stack"]}
      />
    );
  });

  return (
    <div className={styles.project}>
      <div className={styles["left-content"]}>
        <h1>
          0{index + 1} / {name}
        </h1>
        <h2>{description}</h2>
        <div className={styles["tech-stacks"]}>{techStacks}</div>
        <div className={styles["demo"]}>
          <a target="_blank" href={`${githubLink}`}>
            <Image
              src="/icons/images/gitHub_link.svg"
              alt="github link"
              width={135}
              height={40}
              className={styles["github-link"]}
            />
          </a>
          <a target="_blank" href={`${liveDemoLink}`}>
            <Image
              src="/icons/images/live_demo_link.svg"
              alt="live demo link"
              width={217}
              height={39}
              className={styles["live-demo"]}
            />
          </a>
        </div>
      </div>
      <Image
        src={imageLink}
        alt="BeanKeeper"
        width={637}
        height={383}
        className={styles.image}
      />
    </div>
  );
}
