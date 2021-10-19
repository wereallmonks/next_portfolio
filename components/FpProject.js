import { server } from "../config";
import Link from "next/link";

const FpProject = ({ title, description }) => {
  return (
    <>
      <article className='container max-w-screen-xl mx-auto'>
        <div className='proj block sm:grid sm:grid-cols-2 ml-6 mr-24 md:mr-12 my-6'>
          <div className='h-auto rounded-md block md:flex flex-col justify-center my-16 sm:my-0 relative'>
            <figure className='h-auto'>
              <img
                src='https://images.unsplash.com/photo-1603285990954-183e50a874b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyNzg2MDgzNg&ixlib=rb-1.2.1&q=80&w=400'
                width={400}
                height={266}
                alt=''
              />
            </figure>

            <div
              className='project-wrapper flex flex-col ml-auto sm:ml-12 -mt-14 sm:-mt-16 w-4/5 sm:w-72 bg-white shadow-lg bg-clip-padding bg-opacity-20 border border-none relative'
              style={{ backdropFilter: "blur(20px)" }}
            >
              <h2 className='text-4xl text-white font-extrabold px-8 pt-3 mt-4'>
                {title}
              </h2>
              <p className='text-sm text-white px-8 py-4 leading-6'>
                {description}
              </p>
              <button className='w-1/4 self-end p-4 btn-alt1 transform translate-x-2 translate-y-2 shadow-2xl'>
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
    </>
  );
};

export default FpProject;
