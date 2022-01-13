import { server } from "../config";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

const projects = ({ projects }) => {
  console.log(projects);
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
          {projects.map((item) => {
            return (
              <div className='h-auto rounded-md block md:flex flex-col justify-center my-16 sm:my-0 relative'>
                <figure className='h-auto'>
                  <Image
                    src={item.image}
                    width={400}
                    height={266}
                    alt={item.title}
                  />
                </figure>
                <p className='proj--number text-6xl text-white font-thin absolute -top-2 -left-6'>
                  0{item.id}
                </p>
                <div
                  className='project-wrapper flex flex-col ml-auto sm:ml-12 -mt-14 sm:-mt-16 w-4/5 sm:w-72 bg-white shadow-lg bg-clip-padding bg-opacity-20 border border-none relative'
                  style={{ backdropFilter: "blur(20px)" }}
                >
                  <h2 className='text-4xl text-white font-extrabold px-8 pt-3 mt-4'>
                    {item.title}
                  </h2>
                  <p className='text-sm text-white px-8 py-4 leading-6'>
                    {item.description}
                  </p>
                  <button className='w-1/4 self-end p-4 btn-alt3 transform translate-x-2 translate-y-2 shadow-2xl'>
                    <span className='sr-only'></span>
                    <Link href={`/project/${item.id + 1}`}>
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
            );
          })}
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
