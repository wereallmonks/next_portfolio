export default function About() {
  return (
    <section className='text-gray-400 bg-primary body-font relative'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='sm:text-3xl text-2xl md:text-5xl font-medium text-center title-font text-white mb-4'>
            Skills &amp; <br />
            Experience
          </h1>
          <p className='text-base leading-relaxed w-1/2 xl:w-2/4 lg:w-2/4 mx-auto'>
            Blue bottle crucifix vinyl post-ironic four dollar toast vegan
            taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
            pug.
          </p>
        </div>
        <div className='flex flex-wrap -m-4 justify-center'>
          <div className='p-4 lg:w-1/4 sm:w-1/2 w-full'>
            <h2 className='font-medium title-font tracking-wide text-white mb-4 text-lg text-center sm:text-left uppercase'>
              Current Stack
            </h2>
            <div className='flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2'>
              <a className='alpha flex flex-nowrap py-2'>
                <span className='bg-transparent w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center '>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='text-yellow-200 opacity-70 w-6 h-6 flex-shrink-0 mr-4'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                    <path d='M22 4L12 14.01l-3-3'></path>
                  </svg>
                </span>
                ReactJS
              </a>
              <a className='uppercase flex flex-nowrap py-2'>
                <span className='bg-transparent w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='text-yellow-200 opacity-70 w-6 h-6 flex-shrink-0 mr-4'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                    <path d='M22 4L12 14.01l-3-3'></path>
                  </svg>
                </span>
                Jamstack
              </a>
              <a className='alpha flex flex-nowrap py-2'>
                <span className='bg-transparent w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='text-yellow-200 opacity-70 w-6 h-6 flex-shrink-0 mr-4'
                    viewBox='0 0 24 24'
                  >
                    <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
                    <path d='M22 4L12 14.01l-3-3'></path>
                  </svg>
                </span>
                Strapi CMS
              </a>
              <a className='alpha flex flex-nowrap py-2'>
                <span className='bg-transparent w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    className='text-yellow-200 opacity-70 w-6 h-6 flex-shrink-0 mr-4'
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

          <div className='p-4 lg:w-2/4 sm:w-1/2 w-full'>
            <h2 className='font-medium title-font tracking-wide text-white mb-4 text-lg text-center sm:text-left uppercase'>
              Skills
            </h2>
            <nav className='flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2'>
              <a className='flex flex-col w-full py-1 alpha'>
                <div className='h-1 bg-gray-700 mb-1.5 opacity-80 rounded overflow-hidden'>
                  <div className='w-2/4 h-full bg-pink-500 opacity-80'></div>
                </div>
                HTML
              </a>
              <a className='flex flex-col w-full py-1 alpha'>
                <div className='h-1 bg-gray-700 mb-1.5 opacity-80 rounded overflow-hidden'>
                  <div className='w-3/4 h-full bg-yellow-100'></div>
                </div>
                CSS
              </a>
              <a className='flex flex-col w-full py-1 alpha'>
                <div className='h-1 bg-gray-700 mb-1.5 opacity-80 rounded overflow-hidden'>
                  <div className='w-2/4 h-full prim-bg-red'></div>
                </div>
                Javascript
              </a>
              <a className='flex flex-col w-full py-1 alpha'>
                <div className='h-1 bg-gray-700 mb-1.5 opacity-80 rounded overflow-hidden'>
                  <div className='w-4/4 h-full prim-bg-green'></div>
                </div>
                Git
              </a>
              <a className='flex flex-col w-full py-1 alpha'>
                <div className='h-1 bg-gray-700 mb-1.5 rounded overflow-hidden'>
                  <div className='w-2/4 h-full prim-bg-blue'></div>
                </div>
                Typekit
              </a>
            </nav>
          </div>
        </div>
        <button
          href='/about'
          className='flex flex-nowrap justify-center mx-auto mt-16 text-white prim-bg-green border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg'
        >
          Wait there's more{" "}
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
