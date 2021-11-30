import { server } from "../config";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

const projects = ({ projects }) => {
  return (
    <>
      <Head>
        <title>claudiamarie.me projects</title>
        <meta
          name='portfolio'
          content='web development, programming, next.js'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Cormorant&family=Montserrat&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Nav />
      <div className='2xl:max-w-xl 2xl:mx-auto'>
        <h1 className='page-title'>Projects</h1>
      </div>
      <article className='container max-w-screen-xl mx-auto'>
        <div className='proj block sm:grid sm:grid-cols-2 ml-6 mr-24 md:mr-12 my-6'>
          <div className='h-auto rounded-md block md:flex flex-col justify-center my-16 sm:my-0 relative'>
            <figure className='h-auto'>
              <Image
                src={projects[0].image}
                width={400}
                height={266}
                alt='Valencia Vikings'
              />
            </figure>
            <p className='proj--number text-6xl text-white font-thin absolute -top-2 -left-6'>
              0{projects[0].id}
            </p>
            <div
              className='project-wrapper flex flex-col ml-auto sm:ml-12 -mt-14 sm:-mt-16 w-4/5 sm:w-72 bg-white shadow-lg bg-clip-padding bg-opacity-20 border border-none relative'
              style={{ backdropFilter: "blur(20px)" }}
            >
              <h2 className='text-4xl text-white font-extrabold px-8 pt-3 mt-4'>
                {projects[0].title}
              </h2>
              <p className='text-sm text-white px-8 py-4 leading-6'>
                {projects[0].description}
              </p>
              <button className='w-1/4 self-end p-4 btn-alt3 transform translate-x-2 translate-y-2 shadow-2xl'>
                <span className='sr-only'></span>
                <Link href='/project/1'>
                  <svg
                    className='fill-current text-white transform h-5 w-5 mr-auto ml-auto'
                    xmlns='http://www.w3.org/2000/svg'
                    fillRule='evenodd'
                    clipRule='evenodd'
                  >
                    <path d='M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z' />
                  </svg>
                </Link>
              </button>
            </div>
          </div>
          <div className='h-auto rounded-md block md:flex flex-col justify-center my-6 sm:my-0 relative'>
            <figure className='h-auto'>
              <Image
                src={projects[1].image}
                width={400}
                height={266}
                alt='Ruby Palindrome Detector'
              />
            </figure>
            <p className='proj--number text-6xl text-white font-thin absolute top-6 -left-4'>
              0{projects[1].id}
            </p>
            <div
              className='project-wrapper flex flex-col sm:w-96 md:w-72 w-4/5 ml-auto sm:ml-12 sm:-mt-16 -mt-14 relative bg-white shadow-lg bg-clip-padding bg-opacity-20 border border-none'
              style={{ backdropFilter: "blur(20px)" }}
            >
              <h2 className='text-4xl text-white font-extrabold px-8 py-2 mt-4'>
                {projects[1].title}
              </h2>
              <p className='text-sm text-white px-8 my-4 leading-6 min-h-0 h-24 overflow-hidden'>
                {projects[1].description}
              </p>
              <button className='w-1/4 flex self-end p-4 btn-alt3 transform translate-x-2 translate-y-2 shadow-2xl'>
                <span className='sr-only'></span>
                <Link href='/project/2'>
                  <svg
                    className='fill-current text-white h-5 w-5 mr-auto ml-auto'
                    xmlns='http://www.w3.org/2000/svg'
                    fillRule='evenodd'
                    clipRule='evenodd'
                  >
                    <path d='M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z' />
                  </svg>
                </Link>
              </button>
            </div>
          </div>
          <div className='block sm:ml-24 sm:col-span-2 h-full sm:h-64 rounded-md md:flex sm:flex-row items-center self-center align-center mx-auto my-0 md:my-9 relative'>
            <figure className='h-5/6'>
              <Image
                src={projects[2].image}
                width={400}
                height={266}
                alt='React Piano'
              />
            </figure>
            <p className='proj--number text-6xl text-white font-thin absolute sm:bottom-0 sm:left-6 top-2 -left-4'>
              0{projects[2].id}
            </p>
            <div
              className='project-wrapper relative h-auto flex flex-col sm:w-96 md:w-6/12 w-4/5 ml-auto -mt-14 sm:-ml-16 sm:mt-4 bg-white shadow-lg bg-clip-padding bg-opacity-20 border border-none'
              style={{ backdropFilter: "blur(20px)" }}
            >
              <h2 className='text-4xl text-white font-extrabold px-8 pt-6 border-left '>
                {projects[2].title}
              </h2>
              <p className='text-sm text-white px-8 pb-8 pt-4 leading-6'>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Nullam accumsan lorem in dui.
                Praesent adipiscing. Vestibulum volutpat pretium libero.
              </p>
              <button className='w-1/4 flex self-end border border-clear p-4 btn-alt3 transform translate-x-2 translate-y-2 shadow-2xl'>
                <span className='sr-only'></span>
                <Link href='/project/3'>
                  <svg
                    className='fill-current text-white h-5 w-5 mr-auto ml-auto'
                    xmlns='http://www.w3.org/2000/svg'
                    fillRule='evenodd'
                    clipRule='evenodd'
                  >
                    <path d='M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z' />
                  </svg>
                </Link>
              </button>
            </div>
          </div>
          <div className='h-auto rounded-md block sm:flex flex-col justify-center sm:ml-2 mt-2 mb-4 sm:my-4 my-0 relative'>
            <figure className='h-full'>
              <Image
                src={projects[3].image}
                width={400}
                height={266}
                alt='Weather App'
              />
            </figure>
            <p className='proj--number text-6xl text-white font-thin absolute top-2 -left-4'>
              0{projects[3].id}
            </p>
            <div
              className='project-wrapper flex flex-col sm:ml-12 -mt-14 w-4/5 sm:w-96 relative ml-auto bg-white shadow-lg bg-clip-padding bg-opacity-20 border border-none'
              style={{ backdropFilter: "blur(20px)" }}
            >
              <h2 className='text-4xl text-white font-extrabold px-8 pt-3 mt-4'>
                {projects[3].title}
              </h2>
              <p className='text-sm text-white px-8 py-4'>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Nullam accumsan lorem in dui.
                Praesent adipiscing. Vestibulum volutpat pretium libero.
              </p>
              <button className='w-1/4 self-end p-4 btn-alt3 bg-spanish transform translate-x-2 translate-y-2 shadow-2xl'>
                <span className='sr-only'></span>
                <Link href='/project/4'>
                  <svg
                    className='fill-current text-white h-5 w-5 mr-auto ml-auto'
                    xmlns='http://www.w3.org/2000/svg'
                    fillRule='evenodd'
                    clipRule='evenodd'
                  >
                    <path d='M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z' />
                  </svg>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/projects/`);
  const projects = await res.json();

  return {
    props: {
      projects,
    },
  };
};

export default projects;
