import { AiFillGithub } from "react-icons/ai";
import Spotify from "../components/Spotify";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>claudiamarie.me about page</title>
        <meta
          name='react portfolio'
          content='web development, programming, next.js'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Cormorant&family=Montserrat&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Nav />
      <h1 className='page-title'>About Me</h1>
      <section className='text-gray-400 bg-primary body-font sub--page mb-16'>
        <div className='container px-5 mx-auto flex flex-wrap'>
          <div className='lg:w-2/5 w-full mb-10 lg:mb-0 rounded-none overflow-hidden'>
            <img
              alt='feature'
              className='img-responsive'
              src='https://placekitten.com/g/600/500'
            />
            <aside className='spotify-bg py-12'>
              <div className='py-10 mx-auto w-3/4'>
                <iframe
                  height='380'
                  loading='lazy'
                  src='https://open.spotify.com/embed/playlist/5kgVJPGaIt79ZLsVuj82WW'
                  title='Clo in Quarantine IV'
                  width='300'
                  className='flex justify-center mx-auto rounded-b-lg border-4 border-yellow-500 border-opacity-70'
                ></iframe>
              </div>
            </aside>
          </div>
          <div className='flex flex-col flex-wrap bg-black translate -translate-y-6 lg:py-2 -mb-10 lg:w-2/4 lg:pl-8 lg:text-left text-left md:text-center'>
            <div className='flex flex-col mb-5 lg:items-start items-center'>
              <div className='flex-grow'>
                <h2 className='relative capitalize font-extrabold text-gray-300 text-2xl title-font mb-1 w-full pr-4'>
                  <span>How It All Began</span>
                </h2>
                <p className='alpha leading-relaxed text-sm w-9/12'>
                  My inquisitive nature led me to pursue a degree in physics,
                  but it also opened a door to a world where wonder and
                  creativity would evolve and blend together with programming.
                  In college I learned the basics of writing programs with tools
                  such as Fortran and C++, and afterwards I continued learning
                  on my own. I became hooked on JavaScript and began creating
                  applications for the web. I love seeing how it all unfolds
                  into something user-friendly, accessible, and interesting.
                </p>
              </div>
            </div>
            <div className='flex flex-col mb-4 tart items-center'>
              <div className='flex-grow'>
                <h2 className='relative apitalize font-extrabold text-gray-300 text-2xl title-font mb-1'>
                  <span>Evolution</span>
                </h2>
                <p className='alpha leading-relaxed text-sm w-9/12 mb-5'>
                  When I am not coding, you will find me making meals with
                  friends, baking, kickboxing, doing yoga, reading, and hanging
                  out with my little family: husband, Ryan [add a link], and
                  tortie Siamese, Lenù. [Maybe a picture could go here?
                </p>
                <h2 className='relative capitalize font-extrabold text-gray-300 text-2xl  title-font mb-3'>
                  <span>Turn it up</span>
                </h2>
                <p className='alpha leading-relaxed text-sm w-9/12 text-white mb-3'>
                  I also collect records and I'm a big music nerd. If you're
                  interested, this is what I've been listening to lately as well
                  as my current favorite playlist.
                </p>
                <Spotify />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
