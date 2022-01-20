import Spotify from "@/components/Spotify";
import Head from "next/head";
import Nav from "@/components/Nav";
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
      <div className='2xl:max-w-2xl 2xl:mx-auto mt-9'>
        <h1 className='page-title'>About Me</h1>
      </div>
      <section className='text-gray-400 bg-primary body-font sub--page mb-16'>
        <div
          // style={{ maxHeight: "1600px" }}
          className='container masonry-2col pr-20 lg:pr-16'
        >
          <div className='masonry-1 lg:overflow-hidden relative h-96 transform -translate-y-1 mb-10 lg:mb-0 rounded-none md:p-8 lg:p-16'>
            <img alt='feature' className='img-responsive' src='/me.jpg' />
          </div>

          <div className='masonry-2 relative bg--motion-lines-alt shadow-2xl translate -translate-y-6 px-4 lg:py-2 -mb-10 lg:pl-8 lg:text-left text-left md:text-center'>
            <div className='flex flex-col mb-5 mt-5 lg:items-start items-center'>
              <div className='flex-grow'>
                <h2 className='relative capitalize text-left font-extrabold text-mushroom text-2xl title-font mb-1 mt-8 md:mt-1 w-full pr-4'>
                  <span>Beginnings</span>
                </h2>
                <p className='alpha leading-relaxed text-xs text-left lg:w-9/12'>
                  My inquisitive nature led me to pursue a degree in physics,
                  and it also opened a door to a world where wonder and
                  creativity would evolve and blend together with programming.
                  In college I learned the basics of writing programs with tools
                  such as Fortran and C++, and afterwards I continued learning
                  on my own. I became hooked on JavaScript and began creating
                  applications for the web and I love seeing how it all unfolds
                  into projects that are user friendly, accessible, and
                  interesting.
                </p>
              </div>
            </div>
            <div className=' flex flex-col mb-4 tart items-center'>
              <div className='flex-grow'>
                <h2 className='relative capitalize text-left font-extrabold text-mushroom text-2xl title-font mb-3'>
                  <span>evolution</span>
                </h2>
                <p className='alpha leading-relaxed text-xs lg:w-9/12 text-left mb-5'>
                  When I am not coding, you will find me making meals virtually
                  with friends, baking, kickboxing, doing yoga, reading, and
                  hanging out with my little family: husband, Ryan and tortie
                  Siamese, Lenù.
                </p>
                <h2 className='relative capitalize text-left font-extrabold text-mushroom text-2xl title-font mb-3'>
                  <span>turn it up</span>
                </h2>
                <p className='alpha leading-relaxed text-xs lg:w-9/12 text-left text-white mb-2'>
                  I've collected vinyl records since I was a teen and music is
                  always in the background, whether I'm coding or cooking. If
                  you're interested, this is what I've been listening to lately
                  as well as my current favorite playlist.
                </p>
                <div className='grid px-4 sm:px-1'>
                  <Spotify />
                </div>
              </div>
            </div>
          </div>
          <aside
            style={{ maxHeight: "595px" }}
            className='masonry-3 relative spotify-bg mt-12 mx-8 md:mx-14'
          >
            <p
              style={{ backgroundColor: "#131415" }}
              className='alpha flex flex-nowrap justify-center mt-0 text-xl font-normal text-redorpiment py-4 items-baseline'
            >
              <span className='bg-transparent w-4 h-4 ml-2 mr-2 rounded-full items-center justify-center '>
                <svg
                  fill='none'
                  stroke='currentColor'
                  className='text-redorpiment opacity-70 w-8 h-8 flex-shrink-0 mr-2'
                  xmlns='http://www.w3.org/2000/svg'
                  fillRule='evenodd'
                  clipRule='evenodd'
                >
                  <path d='M22 13c-.027-5.497-4.497-10-10-10s-9.973 4.503-10 10h2.5c.828 0 1.5.672 1.5 1.5v7c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-8.5c.027-6.601 5.394-12 12-12s11.973 5.399 12 12v8.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-7c0-.828.672-1.5 1.5-1.5h2.5z' />
                </svg>
              </span>
              Playlist of the Week
            </p>
            <div className='py-10 mx-auto w-full'>
              <iframe
                height='380'
                loading='lazy'
                src='https://open.spotify.com/embed/playlist/5kgVJPGaIt79ZLsVuj82WW'
                title='Clo in Quarantine IV'
                width='300'
                className='flex justify-center mx-auto shadow-2xl border-vienna border-opacity-70'
              ></iframe>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
