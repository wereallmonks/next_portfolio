import { server } from "../config";
import Link from "next/link";

const FpProject = ({ title, description }) => {
  return (
    <>
      <article className='container max-w-screen-xl mx-auto'>
        <div className='text-left md:text-center mb-2 mt-12 md:mt-0'>
          <h1 className='sm:text-3xl text-3xl md:text-5xl font-medium text-center title-font text-white mb-4'>
            Latest Project
          </h1>
          <p className='text-base leading-relaxed w-1/2 xl:w-2/4 lg:w-2/4 mx-auto'>
            I am currently working on a freelance project creating a responsive
            site using GatsbyJS, GraphQL, and incorporating Wordpress as the
            back-end. However, below is my latest completed project.
          </p>
        </div>
        <div className='proj block sm:grid sm:grid-cols-2 ml-6 mr-16 md:mr-16 my-6'>
          <div className='block sm:ml-24 sm:col-span-2 h-full sm:h-64 rounded-md md:flex sm:flex-row items-center self-center align-center mx-auto my-0 md:my-6 relative'>
            <figure className='h-5/6'>
              <img
                src='https://images.unsplash.com/photo-1603285990954-183e50a874b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyNzg2MDgzNg&ixlib=rb-1.2.1&q=80&w=400'
                width={400}
                height={266}
                alt=''
              />
            </figure>
            <div
              className='project-wrapper relative h-auto flex flex-col sm:w-96 md:w-6/12 w-4/5 ml-auto -mt-6 lg:mt-12 sm:-ml-16 bg-white shadow-lg bg-clip-padding bg-opacity-20 border border-none'
              style={{ backdropFilter: "blur(20px)" }}
            >
              <h2 className='text-4xl text-white font-extrabold px-8 pt-6 border-left border-red-600'>
                {title}
              </h2>
              <p className='text-sm text-white px-8 pb-8 pt-4 leading-6'>
                {description}
              </p>
              <button className='w-1/4 self-end p-4 btn-alt1 transform translate-x-2 translate-y-2 shadow-2xl'>
                <span className='sr-only'></span>
                <Link href='/project/4'>
                  <svg
                    className='fill-current text-white h-5 w-6 mr-auto ml-auto'
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
    </>
  );
};

export default FpProject;
