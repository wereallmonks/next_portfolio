import { AiFillGithub } from "react-icons/ai";
import Spotify from "../components/Spotify";

const About = () => {
  return (
    <div>
      <title>About Me</title>
      <h1>More about me and my interests</h1>
      <div>
        My inquisitive nature led me to pursue a degree in physics, but it also
        opened a door to a world where wonder and creativity would evolve and
        blend together with programming. In college I learned the basics of
        writing programs with tools such as Fortran and C++, but afterwards I
        contined learning on my own. I became addicted to JavaScript and began
        creating applications for the web. I love seeing how it all unfolds into
        something user-friendly, accessible, and interesting.
        <br />
        When I am not coding, you will find me making meals with friends,
        baking, kickboxing, doing yoga, reading, and hanging out with my little
        family: husband, Ryan, and tortie Siamese, Lenù.
        <br />
      </div>

      <h1>
        I also collect records and I'm a big music nerd. If you're interested,
        this is what I've been listening to lately
      </h1>
      <Spotify />
      <p>
        Part IV of a series of playlists Ryan made for me during this pandemic.
        I highly recommend giving it a listen.
      </p>
      <iframe
        height='380'
        loading='lazy'
        src='https://open.spotify.com/embed/playlist/5kgVJPGaIt79ZLsVuj82WW'
        style={{ float: "left", paddingRight: "5px" }}
        title='Clo in Quarantine IV'
        width='300'
      ></iframe>
      <a href='https://github.com/wereallmonks'>
        <AiFillGithub className='w-20 h-20' />
      </a>
    </div>
  );
};

export default About;
