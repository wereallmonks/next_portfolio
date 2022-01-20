import Link from "next/link";

export default function About() {
  return (
    <section className='text-gray-400 bg-primary body-font relative'>
      <div className='container px-5 py-0 md:py-24 mx-auto'>
        <div className='text-left md:text-center mb-10'>
          <h1 className='sm:text-3xl text-3xl md:text-5xl font-medium text-center title-font text-white mb-4'>
            Skills &amp; <br />
            Experience
          </h1>
          <p className='text-base leading-relaxed w-1/2 xl:w-2/4 lg:w-2/4 mx-auto'>
            I have been working on accessible, well-built projects using code
            with posterity in mind. This has opened opportunities to help
            develop solutions for clients that share my enthusiam for robust
            websites.
          </p>
        </div>
        <div className='flex flex-col sm:flex-row sm:flex-nowrap -m-4 justify-center'>
          <div className='p-4 w-3/5 lg:w-1/4 sm:w-1/2 bg-transparent ml-auto mr-auto transform sm:translate-x-4 '>
            <h2 className='title-font tracking-wide text-white mb-4 text-xl font-extrabold text-center sm:text-left uppercase'>
              Current Stack
            </h2>
            <div className='flex flex-col items-start sm:text-left text-center -mb-1 space-y-1 md:space-y-2 md:pl-4'>
              <a className='alpha flex flex-nowrap text-base text-redorpiment py-2 pl-10 sm:pl-10 lg:pl-2'>
                <span className='bg-transparent w-4 h-6 mr-2 rounded-full inline-flex items-center justify-center '>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='text-spanish opacity-70 w-6 h-6 flex-shrink-0 mr-4'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                    <path d='M22 4L12 14.01l-3-3'></path>
                  </svg>
                </span>
                NextJS
              </a>
              <a className='alpha flex flex-nowrap text-base text-redorpiment py-2 pl-10 sm:pl-10 lg:pl-2'>
                <span className='bg-transparent w-4 h-6 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='text-spanish opacity-70 w-6 h-6 flex-shrink-0 mr-4'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                    <path d='M22 4L12 14.01l-3-3'></path>
                  </svg>
                </span>
                Gatsby
              </a>
              <a className='alpha flex flex-nowrap py-2 pl-10 sm:pl-10 lg:pl-2 text-base text-redorpiment'>
                <span className='bg-transparent w-4 h-6 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='text-spanish opacity-70 w-6 h-6 flex-shrink-0 mr-4'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                    <path d='M22 4L12 14.01l-3-3'></path>
                  </svg>
                </span>
                Node.js
              </a>
              <a className='alpha flex flex-nowrap text-base text-redorpiment py-2 pl-10 sm:pl-10 lg:pl-2'>
                <span className='bg-transparent w-4 h-6 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='text-spanish opacity-70 w-6 h-6 flex-shrink-0 mr-4'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                    <path d='M22 4L12 14.01l-3-3'></path>
                  </svg>
                </span>
                GraphQL
              </a>
            </div>
          </div>

          <div className='p-4 lg:w-2/4 sm:w-1/2 w-8/12 mx-auto'>
            <h2 className='title-font tracking-wide text-white mb-4 text-xl font-extrabold text-center sm:text-left uppercase'>
              Skills
            </h2>
            <div className='flex justify-start'>
              <ul className='bg-black bg-opacity-40 rounded-lg w-96 text-mushroom leading-6 px-4 pt-1 pb-2'>
                <li className='text-sm alpha px-4 py-2 border-b border-yellow-500 border-opacity-30 w-full rounded-t-lg'>
                  Progressive Web Apps (PWA)
                </li>
                <li className='text-sm alpha px-4 py-2 border-b border-yellow-500 border-opacity-30 w-full'>
                  Headless CMS w/ GraphQL
                </li>
                <li className='text-sm alpha px-4 py-2 border-b border-yellow-500 border-opacity-30  w-full'>
                  HTML / CSS Frameworks
                </li>
                <li className='text-sm alpha px-4 py-2 border-b border-yellow-500 border-opacity-30 w-full'>
                  API generation
                </li>
                <li className='text-sm alpha px-4 py-2 w-full rounded-b-lg'>
                  Cross-browser support
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button
          href='/about'
          className='flex flex-nowrap transition-all justify-center mx-auto mt-16 hover:text-vienna hover:bg-mushroom border-0 py-2 px-8 focus:outline-none bg-spanish text-mushroom rounded text-lg'
        >
          <Link href='/about'>
            <a>Wait there's more </a>
          </Link>
          <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='self-center w-4 h-4 ml-2'
            viewBox='0 0 24 24'
          >
            <path d='M5 12h14M12 5l7 7-7 7'></path>
          </svg>
        </button>
      </div>
    </section>
  );
}

// My love of
// web development has allowed me to work on projects for clients using
// the aforementioned frameworks as well building their CMS using
// Strapi and Wordpress.
