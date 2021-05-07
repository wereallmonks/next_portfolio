import Link from 'next/link'
import { useRouter } from 'next/router'

const project = ({project}) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <>
      <h1>{project.title}</h1>
      <br />
      <Link href="/projects">Back</Link>
    </>
  )
}

export const getServerSideProps = async(context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

  const project = await res.json()

  return {
    props: {
      project
    }    
  }
}

export default project
