import Link from "next/link";
import projectStyles from "../styles/Project.module.css";

const Project = ({ project }) => {
  return (
    <Link href='/project/[id]' as={`/project/${project.id}`}>
      <a className={projectStyles.card}>
        <h1>{project.title} &rarr;</h1>
        <p>{project.description}</p>
      </a>
    </Link>
  );
};

export default Project;
