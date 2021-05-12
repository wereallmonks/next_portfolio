import {server} from '../config'
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
  const res = await fetch(`${server}/api/projects`)
  const projects = await res.json()

  return {
    props: {
      projects,
    },
  }
} 

export default projects