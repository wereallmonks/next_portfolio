import Head from 'next/head'
import ProjectList from '../components/ProjectList'

const Home = () => {
  return (
    <div>
      <Head>
        <title>claudiamarie.me</title>
        <meta name='react portfolio' content='web development, programming, next.js' />
      </Head>
      <div>
        <h1>Claudia Marie Vizena</h1>
        <h2>I love creating things for the web</h2>
        <h3>I specialize in building websites and applications</h3>
      </div>
      <br />
      <div> 
        I have been using tools such as JavaScript, React, GraphQL, Gatsby.js, and most recently, using Next.js
      </div>
      <br />
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const projects = await res.json()

//   return {
//     props: {
//       projects,
//     },
//   }
// }  

export default Home