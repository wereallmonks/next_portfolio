export default function Hero() {
  return (
    <div className='min-h-40vh pb-20 text-left '>
      <div className='grid xl:grid-cols-2 grid-cols-none md:grid-flow-col mr-14 -mt-22 md:mr-0 sm:gap-0'>
        <div className='solid-sq gradient--bg px-10 py-10'>
          <div className='grid justify-end relative text-wrap transform translate-x-1/4 translate-y-20 z-50'>
            <h1 className='text-6xl text-left text-gray-200'>
              I love building
              <br /> a better web
            </h1>
            <p className='no-margin text-xl text-left w-7/12'>
              I specialize in developing websites and applications
            </p>
            <button className='w-8 p-1.5 btn-4 bg-transparent border-none transform translate-y-2'>
              <span className='sr-only'>Link to Project #4</span>
              <svg
                className='fill-current animate-bounce transform text-black hover:text-black h-9 w-8 mx-auto'
                xmlns='http://www.w3.org/2000/svg'
                fillRule='evenodd'
                clipRule='evenodd'
              >
                <path d='M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z' />
              </svg>
            </button>
          </div>
        </div>
        <div className='transform translate-y-20 sm:-translate-x-28 bg-gray-700 bg-primary grid items-center mx-20 my-10 shadow-2xl'>
          <img
            src='https://placekitten.com/400/400'
            className='h-full m-0 p-0 w-full'
          />
        </div>
      </div>
    </div>
  );
}
