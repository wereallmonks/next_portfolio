import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import Head from "next/head";
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import Fade from "react-reveal/Fade";

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
      <h1 className='relative page-title overflow-visible projects'>
        {project.title}
      </h1>

      <section className='text-gray-400 bg-primary body-font sub--page mb-16'>
        <div className='md:container md:max-w-screen-xl pl-10 pr-14 sm:pr-28 mt-12 mx-auto flex flex-wrap'>
          <Fade duration={2000}>
            <p className='alpha leading-relaxed text-sm w-11/12 lg:w-9/12 '>
              {project.summary}
            </p>
          </Fade>
          <div className='flex flex-wrap sm:flex-nowrap w-full flex-col md:flex-row justify-between mr-12 my-8 black bg-opacity-60 bg-black'>
            <div className='w-60 sm:w-[64rem] order-2 sm:order-1'>
              <Fade duration={3000}>
                <div className='flex justify-center sm:justify-start divide-x-4 divide-green-900 px-2 pt-2 pb-8 sm:pt-8 md:pt-24'>
                  <h3 className='project-vert'>Stack</h3>
                  <ul className='pl-4 flex flex-col items-left justify-start my-1'>
                    {project.stack.map((item, i) => {
                      return (
                        <li
                          className='alpha md:text-sm text-gray-200 pb-1'
                          key={i}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Fade>
            </div>
            <div className='flex flex-col sm:mt-6 mb-6 px-4 md:px-8 order-1 sm:order-2'>
              <picture className='block mt-12 md:mt-0'>
                <img
                  className='card-img-top'
                  src={project.image}
                  alt='project image'
                />
              </picture>
              <div className='flex justify-center sm:justify-start flex-row mt-4 p-0 mb-2'>
                <Link
                  className='self-center'
                  href={project.projectUrl}
                  alt={project.title}
                >
                  Visit
                </Link>
                <Link href={project.projectUrl} alt={project.title}>
                  <svg
                    className='fill-current text-white hover:text-opacity-50 h-5 w-8 pl-2 lg:pl-2 transform lg:translate-y-1 animate-pulse'
                    xmlns='http://www.w3.org/2000/svg'
                    fillRule='evenodd'
                    clipRule='evenodd'
                  >
                    <path d='M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z' />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className='block btn justify-center text-center md:flex my-4 py-10 w-full bg-gradient-to-r bg-vienna shadow-2xl transform translate-y-24'>
            <Link href='/projects'>Back to Projects</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export const getStaticProps = async (context) => {
  const prisma = new PrismaClient();
  const project = await prisma.projects.findUnique({
    where: {
      id: parseInt(context.params.id),
    },
  });

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths = async () => {
  const prisma = new PrismaClient();
  const projects = await prisma.projects.findMany();
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
