import Spotify from "@/components/Spotify";
import Head from "next/head";
import Nav from "@/components/Nav";
import Footer from "../components/Footer";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import profilePic from "../public/claudiamarie-about.png";

const About = () => {
  return (
    <>
      <Head>
        <title>claudiamarie.me about page</title>
        <meta
          name='description'
          content='JavaScript web development and app creator'
        />
        <meta
          name='keyword'
          content='portfolio, javascript, developer, claudiamarie'
        />
        <meta
          content='width=device-width, initial-scale=1, 
      shrink-to-fit=no'
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
          className='container masonry-2col pr-20 lg:pr-16 mt-6 sm:mt-0'
        >
          <div className='masonry-1 lg:overflow-hidden relative aspect-w-16 aspect-h-9 max-w-[320px] md:max-w-full h-[450px] object-cover sm:h-96 transform sm:-translate-y-1 mb-10 lg:mb-0 rounded-none md:p-8 lg:p-16'>
            <Image
              className='img-responsive'
              src={profilePic}
              alt='claudiamarie web developer'
              width={520}
              height={641}
              placeholder='blur' // Blur-up while loading
              priority
            />
          </div>

          <div className='max-w-full masonry-2 relative bg--motion-lines-alt shadow-2xl translate -translate-y-6 px-4 lg:py-2 -mb-10 lg:pl-8 lg:text-left text-left md:text-center'>
            <Fade duration={4000}>
              <div className='flex flex-col mb-5 mt-5 lg:items-start items-center'>
                <div className='flex-grow'>
                  <h2 className='relative capitalize text-left font-extrabold text-mushroom text-2xl title-font mb-1 mt-8 md:mt-1 w-full pr-4'>
                    <span>Beginnings</span>
                  </h2>
                  <p className='alpha leading-relaxed text-xs text-left lg:w-9/12'>
                    My inquisitive nature led me to pursue a degree in physics,
                    and it also opened a door to a world where wonder and
                    creativity would evolve and blend together with programming.
                    In college I learned the basics of writing programs with
                    tools such as Fortran and C++, and afterwards I continued
                    learning on my own. I became hooked on JavaScript and began
                    creating applications for the web and I love seeing how it
                    all unfolds into projects that are user friendly,
                    accessible, and interesting.
                  </p>
                </div>
              </div>
              <div className=' flex flex-col mb-4 tart items-center'>
                <div className='flex-grow'>
                  <h2 className='relative capitalize text-left font-extrabold text-mushroom text-2xl title-font mb-3'>
                    <span>evolution</span>
                  </h2>
                  <p className='alpha leading-relaxed text-xs lg:w-9/12 text-left mb-5'>
                    When I am not coding, you will find me making meals
                    virtually with friends, baking, kickboxing, doing yoga,
                    reading, and hanging out with my little family: husband,
                    Ryan and tortie Siamese, Lenù.
                  </p>
                  <h2 className='relative capitalize text-left font-extrabold text-mushroom text-2xl title-font mb-3'>
                    <span>turn it up</span>
                  </h2>
                  <p className='alpha leading-relaxed text-xs lg:w-9/12 text-left text-white mb-2'>
                    I&apos;ve collected vinyl records since I was a teen and
                    music is always in the background, whether I&apos;m coding
                    or cooking. If you&apos;re interested, below is a list of my
                    current favorite tracks this month on Spotify.
                  </p>
                  <div className='grid px-4 sm:px-1'>
                    <Spotify />
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <aside
            style={{ maxHeight: "595px" }}
            className='masonry-3 relative spotify-bg mt-12 mx-8 md:mx-14'
          >
            <p
              style={{ backgroundColor: "#131415" }}
              className='alpha flex flex-nowrap justify-center mt-0 text-xl font-normal text-redorpiment py-4 items-baseline'
            >
              <span className='bg-transparent w-4 h-4 ml-2 mr-4 rounded-full items-center justify-center '>
                <svg
                  fill='none'
                  stroke='currentColor'
                  className='text-redorpiment opacity-70 w-8 h-8 flex-shrink-0 mr-4 md:mr-2'
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
                src='https://open.spotify.com/embed/playlist/7EqAiLkh03xsGiCpLMyOSI?utm_source=generator'
                title='Clo in Quarantine IV'
                width='300'
                className='iframe-spotify flex justify-center mx-auto shadow-2xl border-vienna border-opacity-70 p-0 sm:p-2 xl:p-0'
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
