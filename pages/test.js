import { PrismaClient } from "@prisma/client";

export default function Test({ projects }) {
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>{project.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const projects = await prisma.projects.findMany();
  return {
    props: { projects },
  };
}
