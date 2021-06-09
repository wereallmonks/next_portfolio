import {AiFillGithub} from 'react-icons/ai';
import Spotify from '../components/Spotify';

const About = ()=> {
  return (
    <div>
      <title>About Me</title>
      <h1>More about me and my interests</h1>
        <p>I love JavaScript. It opened new doors for me, specifically a new fascination with React. When I am not coding, you will find me behind a book, cooking or doing yoga with friends, learning French, spinning records and making playlists, or hanging out with my little family (my husband, Ryan, and tortie Siamese, Lenù).</p>
      <div>
         <p>My favorite books of all time</p>
      </div>
        <div>
         <h1>This is what I've been listening to lately, if you're curious</h1>
         <Spotify />
         <p>Part IV of a series of playlists Ryan made for me during this pandemic. I highly recommend giving it a listen.</p>
          <iframe height="380" loading="lazy" src="https://open.spotify.com/embed/playlist/1tTQdk0tMMZIuzyT254xpc" style={{float : 'left', paddingRight : '5px'}} title="Clo in Quarantine III" width="300"></iframe>
        </div> 
        <a href='https://github.com/wereallmonks'>
         <AiFillGithub className='w-20 h-20' />
       </a>
    </div>
  )
}

export default About