import {AiFillGithub} from 'react-icons/ai';

const About = ()=> {
  return (
    <div>
      <h1>Who am I?</h1>
         <p>I love JavaScript. It opened new doors for me, specifically a new fascination with React. When I am not coding, you will find me behind a book, doing yoga, learning French, spinning records, or cuddling with my cat, Lenù</p>
     <div>
       <a href='https://github.com/wereallmonks'>
         <AiFillGithub className='w-20 h-20' />
       </a>
     </div>
       <div>
         <title>Books</title>
         <h1>Thank books I purchased at independent bookstores during the pandemic.</h1>
         <title> Music </title>
         <h1>My husbands french music playlists and my terror music for bedtime</h1>
       </div>
    </div>
  )
}

export default About