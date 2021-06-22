import Link from 'next/link'
import {server} from '../../../config'

const project = ({project}) => {

  return (
    <>
      <h1>{project.title}</h1>
      <h1>{project.description}</h1>
      <ul>
        {project.stack.map((item, i) => { 
          return <li key={i}>{item}</li>
        })}
      </ul>
      <Link href={project.projectUrl}>
Visit Link
</Link>
      <a><img className="card-img-top" src={project.image} alt="project image" /></a>
      <br />
      <Link href="/projects">Back</Link>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/projects/${context.params.id}`)

  const project = await res.json()

  return {
    props: {
      project, 
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/projects/`)

  const projects = await res.json()

  const ids = projects.map(project => 
    project.id
  )

  const paths = ids.map(id => ({ params: {
    id: id.toString()
  }}))

  return {
    paths,
    fallback: false,    
  }
}

export default project
