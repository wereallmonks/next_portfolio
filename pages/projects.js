import ProjectList from '../components/ProjectList'

const projects = ({ projects }) => {
    return (
        <div>
            These are my projects
            <br />
            <ProjectList projects={projects} />
        </div>
    )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const projects = await res.json()

  return {
    props: {
      projects,
    },
  }
} 

export default projects