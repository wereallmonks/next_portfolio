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
         <title>About Me</title>
         <h1>My recent purchase from these independent bookstores. </h1>
         <title> Music </title>
         <h1>What I'm listening to</h1>
         <iframe height="380" loading="lazy" src="https://open.spotify.com/embed/playlist/1tTQdk0tMMZIuzyT254xpc" style={{float : 'left', paddingRight : '5px'}} title="Clo in Quarantine III" width="300"></iframe>
       </div>
    </div>
  )
}

export default About