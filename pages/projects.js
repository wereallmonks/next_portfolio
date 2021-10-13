import { server } from "../config";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";

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
      <article className='container max-w-screen-xl mx-auto'>
        <div className='proj block sm:grid sm:grid-cols-2 gap-28 mx-6 my-6'>
          <div className='h-auto rounded-md block sm:flex flex-col justify-center my-16 sm:my-0 relative'>
            <figure className='h-full'>
              <img
                src='https://images.unsplash.com/photo-1603285990954-183e50a874b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyNzg2MDgzNg&ixlib=rb-1.2.1&q=80&w=400'
                width={400}
                height={266}
                alt=''
              />
            </figure>
            <p className='proj--number text-6xl text-white font-thin absolute -top-2 -left-6'>
              0{projects[0].id}
            </p>
            <div
              className='project-wrapper flex flex-col ml-auto sm:ml-12 -mt-14 sm:-mt-16 w-4/5 sm:w-96 bg-white shadow-lg bg-clip-padding bg-opacity-20 border border-none relative'
              style={{ backdropFilter: "blur(20px)" }}
            >
              <h2 className='text-4xl text-white font-extrabold px-8 pt-3 mt-4'>
                {projects[0].title}
              </h2>
              <p className='text-sm text-white px-8 py-4 leading-6'>
                {projects[0].description}
              </p>
              <button className='w-1/4 self-end p-4 btn-alt1 transform translate-x-2 translate-y-2 shadow-2xl'>
                <span className='sr-only'></span>
                <Link href='/project/1'>
                  <svg
                    className='fill-current text-white hover:text-black h-5 w-8 mx-auto'
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
          <div className='h-auto rounded-md block sm:flex flex-col justify-center my-6 sm:my-0 relative'>
            <figure className='h-full'>
              <img
                src='https://images.unsplash.com/photo-1530288782965-fbad40327074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyNzgwNDE4OQ&ixlib=rb-1.2.1&q=80&w=400'
                width={400}
                height={266}
                alt=''
              />
            </figure>
            <p className='proj--number text-6xl text-white font-thin absolute top-6 -left-4'>
              0{projects[1].id}
            </p>
            <div
              className='project-wrapper flex flex-col sm:w-96 md:w-96 w-4/5 ml-auto sm:ml-12 sm:-mt-16 -mt-14 relative bg-white shadow-lg bg-clip-padding bg-opacity-20 border border-none'
              style={{ backdropFilter: "blur(20px)" }}
            >
              <h2 className='text-4xl text-white font-extrabold px-8 py-2 mt-4'>
                {projects[1].title}
              </h2>
              <p className='text-sm text-white px-8 my-4 leading-6 min-h-0 h-24 overflow-hidden'>
                {projects[1].description}
              </p>
              <button className='w-1/4 flex self-end p-4 btn-alt2 transform translate-x-2 translate-y-2 shadow-2xl'>
                <span className='sr-only'></span>
                <Link href='/project/2'>
                  <svg
                    className='fill-current text-white hover:text-black h-5 w-8 mx-auto'
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
          <div className='block sm:ml-24 sm:col-span-2 h-full sm:h-64 rounded-md sm:flex sm:flex-row items-center self-center align-center mx-auto my-0 sm:my-0 relative'>
            <figure className='h-5/6'>
              <img
                src='https://images.unsplash.com/photo-1626624338641-b99e0d32c958?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyNzgwNDI1Mw&ixlib=rb-1.2.1&q=85'
                width={400}
                height={266}
                alt=''
              />
            </figure>
            <p className='proj--number text-6xl text-white font-thin absolute sm:bottom-0 sm:left-6 top-2 -left-4'>
              0{projects[2].id}
            </p>
            <div
              className='project-wrapper relative h-auto flex flex-col sm:w-96 md:w-6/12 w-4/5 ml-auto -mt-14 sm:-ml-16 sm:mt-4 bg-white shadow-lg bg-clip-padding bg-opacity-20 border border-none'
              style={{ backdropFilter: "blur(20px)" }}
            >
              <h2 className='text-4xl text-white font-extrabold px-8 pt-6 border-left border-red-600'>
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
                    className='fill-current text-black hover:text-gray-400 h-5 w-8 mx-auto'
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
              <img
                src='https://images.unsplash.com/photo-1594125593671-3042f6a04f6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyNzgwNDM0Nw&ixlib=rb-1.2.1&q=80&w=400'
                width={400}
                height={266}
                alt=''
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
              <button className='w-1/4 self-end p-4 btn-4 bg-red-900 transform translate-x-2 translate-y-2 shadow-2xl'>
                <span className='sr-only'></span>
                <Link href='/project/4'>
                  <svg
                    className='fill-current text-white hover:text-black h-5 w-8 mx-auto'
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
