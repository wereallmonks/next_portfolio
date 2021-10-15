import Link from "next/link";
import { server } from "../../../config";
import Head from "next/head";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";

const project = ({ project }) => {
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
      <h1 className='page-title'>{project.title}</h1>
      <span className='alpha font-extrabold  text-gray-300 text-sm h-8 p-2 bg-gray-800 capitalize tracking-wider shadow-xl inline-block transform translate-y-6 -translate-x-2 align-middle'>
        project
      </span>
      <section className='text-gray-400 bg-primary body-font sub--page mb-16'>
        <div className='container max-w-screen-xl pl-10 pr-28 mt-12 mx-auto flex flex-wrap'>
          <p className='alpha leading-relaxed text-sm w-11/12'>
            {project.summary}
          </p>
          <div className='flex flex-nowrap w-full justify-between mr-12 my-8'>
            <div>
              <div className='flex divide-x-8 divide-green-900'>
                <h3 className='project-vert cursor-text'>Stack</h3>
                <ul className='pl-4 flex flex-col items-left justify-start my-1'>
                  {project.stack.map((item, i) => {
                    return (
                      <li
                        className='alpha md:text-lg text-gray-200 pb-1'
                        key={i}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className='flex items-end trasform -translate-x-7 -translate-y-12'>
              <Link href={project.projectUrl}>{project.title}</Link>
              <svg
                className='fill-current text-white hover:text-opacity-50 h-5 w-8 mx-auto lg:pl-2 transform translate-y-1 animate-pulse'
                xmlns='http://www.w3.org/2000/svg'
                fillRule='evenodd'
                clipRule='evenodd'
              >
                <path d='M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z' />
                VISIT
              </svg>
            </div>
            <picture className='block sm:flex sm:items-center'>
              <img
                className='card-img-top'
                src={project.image}
                alt='project image'
              />
            </picture>
          </div>
          <div className='btn block md:flex justify-center w-full my-4 py-4'>
            <Link href='/projects'>Back to Projects</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/projects/${context.params.id}`);

  const project = await res.json();

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/projects/`);

  const projects = await res.json();

  const ids = projects.map((project) => project.id);

  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default project;
