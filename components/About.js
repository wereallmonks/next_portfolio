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
            I have been using JavaScript for most of my development, which led
            me to learn React based framewords such as Gatsby and Next for
            building UI. My love of web development has allowed me to work on
            projects for clients using the aforementioned frameworks as well
            building their CMS using Strapi and Wordpress.
          </p>
        </div>
        <div className='flex flex-col sm:flex-row sm:flex-nowrap -m-4 justify-center'>
          <div className='p-4 w-3/5 lg:w-1/4 sm:w-1/2 bg-transparent ml-auto mr-auto transform sm:translate-x-4 '>
            <h2 className='title-font tracking-wide text-white mb-4 text-xl font-extrabold text-center sm:text-left uppercase'>
              Current Stack
            </h2>
            <div className='flex flex-col items-start sm:text-left text-center -mb-1 space-y-1 md:space-y-2'>
              <a className='alpha flex flex-nowrap text-base text-redorpiment py-2 pl-10 sm:pl-10 lg:pl-2'>
                <span className='bg-transparent w-4 h-6 mr-2 rounded-full inline-flex items-center justify-center '>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='text-spanish opacity-50 w-6 h-6 flex-shrink-0 mr-4'
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
                GatsbyJS
              </a>
              <a className='alpha flex flex-nowrap py-2 pl-10 sm:pl-10 lg:pl-2 text-base text-redorpiment'>
                <span className='bg-transparent w-4 h-6 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='text-spanish opacity-90 w-6 h-6 flex-shrink-0 mr-4'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                    <path d='M22 4L12 14.01l-3-3'></path>
                  </svg>
                </span>
                Wordpress (CMS)
              </a>
              <a className='alpha flex flex-nowrap text-base text-redorpiment py-2 pl-10 sm:pl-10 lg:pl-2'>
                <span className='bg-transparent w-4 h-6 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='text-spanish w-6 h-6 flex-shrink-0 mr-4'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                    <path d='M22 4L12 14.01l-3-3'></path>
                  </svg>
                </span>
                TailwindCSS
              </a>
            </div>
          </div>

          <div className='p-4 lg:w-2/4 sm:w-1/2 w-8/12 mx-auto'>
            <h2 className='title-font tracking-wide text-white mb-4 text-xl font-extrabold text-center sm:text-left uppercase'>
              Skills
            </h2>
            <nav className='flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2'>
              <a className='flex flex-col w-4/5 py-1 alpha'>
                <div className='h-1 bg-gray-700 mb-1.5 opacity-80 rounded overflow-hidden'>
                  <div className='w-2/4 h-full bg-mushroom opacity-80'></div>
                </div>
                HTML
              </a>
              <a className='flex flex-col w-4/5 py-1 alpha'>
                <div className='h-1 bg-gray-700 mb-1.5 opacity-80 rounded overflow-hidden'>
                  <div className='w-3/4 h-full bg-spanish'></div>
                </div>
                CSS
              </a>
              <a className='flex flex-col w-4/5 py-1 alpha'>
                <div className='h-1 bg-redorpiment mb-1.5 opacity-80 rounded overflow-hidden'>
                  <div className='w-2/4 h-full prim-bg-red'></div>
                </div>
                Javascript
              </a>
              <a className='flex flex-col w-4/5 py-1 alpha'>
                <div className='h-1 bg-spanish mb-1.5 opacity-80 rounded overflow-hidden'>
                  <div className='w-4/4 h-full prim-bg-green'></div>
                </div>
                Git
              </a>
              <a className='flex flex-col w-4/5 py-1 alpha'>
                <div className='h-1 bg-mushroom mb-1.5 rounded overflow-hidden'>
                  <div className='w-2/4 h-full prim-bg-blue'></div>
                </div>
                React
              </a>
            </nav>
          </div>
        </div>
        <button
          href='/about'
          className='flex flex-nowrap justify-center mx-auto mt-16 text-vienna bg-mushroom border-0 py-2 px-8 focus:outline-none hover:bg-spanish hover:text-mushroom rounded text-lg'
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
