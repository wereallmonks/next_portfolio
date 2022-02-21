import { PrismaClient } from "@prisma/client";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const projects = ({ projects }) => {
  return (
    <>
      <Head>
        <title>claudiamarie.me projects</title>
        <meta
          name='portfolio'
          content='web development, programming, next.js'
        />
        <meta
          name='description'
          content='Portfolio Website for Javascript Developer Claudia Marie'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Cormorant&family=Montserrat&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Nav />
      <div className='2xl:max-w-2xl 2xl:mx-auto'>
        <h1 className='page-title'>Projects</h1>
      </div>
      <article className='container max-w-screen-xl mx-auto md:pl-12 xl:pl-0'>
        <div className='proj block md:grid md:grid-cols-2 ml-12 lg:ml-2 mr-16 md:mr-12 mt-2 mb-6 '>
          {projects.map((item) => {
            return (
              <div
                key={item.id}
                className='h-auto rounded-md block md:flex flex-col justify-center my-16 relative'
              >
                <Fade cascade duration={2000}>
                  <figure className='h-auto mr-4 md:mr-0'>
                    <Image
                      src={item.image}
                      width={400}
                      height={266}
                      alt={item.title}
                    />
                  </figure>
                  <p
                    aria-hidden='true'
                    className='proj--number text-4xl text-white font-thin absolute -top-2 -left-10'
                  >
                    0{item.id}
                  </p>
                  <div
                    className='project-wrapper flex flex-col ml-auto sm:ml-12 -mt-14 sm:-mt-16 w-4/5 sm:w-72 bg-white shadow-lg bg-clip-padding bg-opacity-20 border border-none relative'
                    style={{ backdropFilter: "blur(20px)" }}
                  >
                    <h2 className='text-4xl text-white font-extrabold px-8 pt-3 mt-4'>
                      {item.title}
                    </h2>
                    <p className='text-xs text-white font-second px-8 py-4 leading-4'>
                      {item.description}
                    </p>
                    <button className='w-1/4 self-end p-4 btn-alt3 shadow-2xl'>
                      <span className='sr-only'>More about this project</span>
                      <Link href={`/project/${item.id}`}>
                        <svg
                          className='fill-current text-white h-6 w-6 lg:pt-1 lg:pl-1 mr-auto ml-auto transition-all inline-block align-middle'
                          xmlns='http://www.w3.org/2000/svg'
                          fillRule='evenodd'
                          clipRule='evenodd'
                        >
                          <path d='M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z' />
                        </svg>
                      </Link>
                    </button>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </article>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const projects = await prisma.projects.findMany({
    orderBy: [
      {
        id: "asc",
      },
    ],
  });
  return {
    props: { projects },
  };
}
export default projects;
