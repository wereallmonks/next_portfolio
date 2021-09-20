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
      <section className='text-gray-400 bg-primary body-font'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap'>
          <div className='order-2 lg:order-1 lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden'>
            <img
              alt='feature'
              className='object-cover object-center h-auto w-full'
              src='https://dummyimage.com/460x500'
            />
          </div>
          <div className='order-1 lg:order-2 flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center'>
            <div className='flex flex-col mb-10 lg:items-start items-center'>
              <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-400 mb-5'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  className='w-6 h-6'
                  viewBox='0 0 24 24'
                >
                  <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                </svg>
              </div>
              <div className='flex-grow'>
                <h2 className='capitalize font-bold text-white text-2xl title-font mb-3'>
                  How It All Began
                </h2>
                <p className='alpha leading-relaxed text-sm w-3/4'>
                  My inquisitive nature led me to pursue a degree in physics,
                  but it also opened a door to a world where wonder and
                  creativity would evolve and blend together with programming.
                  In college I learned the basics of writing programs with tools
                  such as Fortran and C++,and afterwards I contined learning on
                  my own. I became addicted to JavaScript and began creating
                  applications for the web. I love seeing how it all unfolds
                  into something user-friendly, accessible, and interesting.
                </p>
              </div>
            </div>
            <div className='flex flex-col mb-10 lg:items-start items-center'>
              <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-400 mb-5'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  className='w-6 h-6'
                  viewBox='0 0 24 24'
                >
                  <circle cx={6} cy={6} r={3} />
                  <circle cx={6} cy={18} r={3} />
                  <path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12' />
                </svg>
              </div>
              <div className='flex-grow'>
                <h2 className='capitalize font-bold text-white text-2xl title-font mb-3'>
                  Evolution
                </h2>
                <p className='alpha leading-relaxed text-sm w-3/4'>
                  When I am not coding, you will find me making meals with
                  friends, baking, kickboxing, doing yoga, reading, and hanging
                  out with my little family: husband, Ryan [add a link], and
                  tortie Siamese, Lenù. [Maybe a picture could go here?]
                </p>
              </div>
            </div>
            <div className='flex flex-col mb-10 lg:items-start items-center'>
              <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-400 mb-5'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  className='w-6 h-6'
                  viewBox='0 0 24 24'
                >
                  <path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2' />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </div>
              <div className='flex-grow'>
                <h2 className='capitalize font-bold text-white text-2xl  title-font mb-3'>
                  A Global Language
                </h2>
                <p className='alpha leading-relaxed text-sm w-3/4'>
                  I also collect records and I'm a big music nerd. If you're
                  interested, this is what I've been listening to lately
                  <Spotify />
                  Part IV of a series of playlists Ryan made for me during this
                  pandemic. I highly recommend giving it a listen.
                </p>
                <iframe
                  height='380'
                  loading='lazy'
                  src='https://open.spotify.com/embed/playlist/5kgVJPGaIt79ZLsVuj82WW'
                  title='Clo in Quarantine IV'
                  width='300'
                  class='spotify--player'
                ></iframe>
                <a href='https://github.com/wereallmonks'>
                  <AiFillGithub className='w-20 h-20' />
                </a>
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
