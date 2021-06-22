import {AiFillGithub} from 'react-icons/ai';
import Spotify from '../components/Spotify';

const About = ()=> {
  return (
    <div>
      <title>About Me</title>
      <h1>More about me and my interests</h1>
      <div>
        My road to programming started in college, but only recently did I enjoy seeing my creations unfold before my eyes into something user-friendly, accessible, and interesting.
        <h2>When I am not coding, you will find me making meals with friends, baking, kickboxing, doing yoga, reading, and hanging out with my little family: husband, Ryan, and tortie Siamese, Lenù.</h2>
      </div>
         <p>Check out what I've been reading!</p>
        <div>
         <h1>And if you're interested, this is what I've been listening to lately</h1>
         <Spotify />
         <p>Part IV of a series of playlists Ryan made for me during this pandemic. I highly recommend giving it a listen.</p>
          <iframe height="380" loading="lazy" src="https://open.spotify.com/embed/playlist/5kgVJPGaIt79ZLsVuj82WW" style={{float : 'left', paddingRight : '5px'}} title="Clo in Quarantine IV" width="300"></iframe>
        </div> 
        <a href='https://github.com/wereallmonks'>
         <AiFillGithub className='w-20 h-20' />
       </a>
    </div>
  )
}

export default About

