export default function Nav() {
  return (
    <header className='min-h-full bg-transparent bg-primary text-white grid'>
      <div className='relative container mx-auto flex flex-wrap py-7 px-10 flex-col md:flex-row items-center md:justify-end sm:items-baseline'>
        <a className='flex title-font font-medium items-center text-white mb-4 md:mb-0 sm:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-10 h-10 text-white p-2 bg-yellow-500 rounded-full'
            viewBox='0 0 24 24'
          >
            <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
          </svg>
          <span className='ml-3 text-xl'>Claudia Vizena | Developer</span>
        </a>
        <nav aria-label='Main Menu' className=''>
          <ul
            className='sm:ml-auto flex flex-wrap items-center text-base justify-center'
            id='menubar1'
            role='menubar'
            aria-label='menu links'
          >
            <li role='none'>
              <a
                className='text-bold mr-5 md:mr-12 hover:text-white uppercase'
                href='/'
                role='menuitem'
                aria-haspopup='true'
                aria-expanded='false'
                tabIndex='0'
              >
                Home
              </a>
            </li>
            <li role='none'>
              <a
                className='text-bold mr-5 md:mr-12 hover:text-white uppercase'
                href='/about'
                role='menuitem'
                aria-haspopup='true'
                aria-expanded='false'
                tabIndex='0'
              >
                About
              </a>
            </li>
            <li role='none'>
              <a
                className='text-bold mr-5 md:mr-12 hover:text-white uppercase'
                href='/projects'
                role='menuitem'
                aria-haspopup='true'
                aria-expanded='false'
                tabIndex='0'
              >
                Projects
              </a>
            </li>
            <li role='none'>
              <a
                className='inline-flex sm:items-center bg-gray-800  py-2 px-3 text-bold hover:bg-gray-700 border-2 border-transparent hover:border-2 rounded text-xs font-thin mt-4 md:mt-0'
                href='/projects'
                role='menuitem'
                aria-haspopup='true'
                aria-expanded='false'
                tabIndex='0'
              >
                Contact
                <svg
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='w-4 h-4 ml-1'
                  viewBox='0 0 24 24'
                >
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
        <div className='fixed right-0 top-8 mr-8 pb-20 z-0 social-side self-end ml-10 social-side transform translate-y-10'>
          <div className='flex relative pb-12 md:pb-40'>
            <div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
              <div className='h-full w-1 bg-gray-800 pointer-events-none'></div>
            </div>
          </div>
          <div className='flex relative pb-12'>
            <div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
              <div className='h-full w-1 bg-gray-800 pointer-events-none'></div>
            </div>
            <div className='flex-shrink-0 rounded-full prim-background inline-flex items-center justify-center text-white relative z-10'>
              <svg
                className='fill-current w-10 p-2 text-gray-500 hover:text-gray-100
                    '
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 26 28'
                aria-hidden='true'
                focusable='false'
              >
                <path d='M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z'></path>
              </svg>
            </div>
          </div>
          <div className='flex relative pb-12'>
            <div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
              <div className='h-full w-1 bg-gray-800 pointer-events-none'></div>
            </div>
            <div className='flex-shrink-0 rounded-full prim-background inline-flex items-center justify-center text-white relative z-10'>
              <svg
                className='fill-current w-10 p-2 text-gray-500 hover:text-gray-100 
                  '
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
                aria-hidden='true'
                focusable='false'
              >
                <path d='M16 0.396c-8.84 0-16 7.164-16 16 0 7.071 4.584 13.067 10.94 15.18 0.8 0.151 1.093-0.344 1.093-0.769 0-0.38-0.013-1.387-0.020-2.72-4.451 0.965-5.389-2.147-5.389-2.147-0.728-1.847-1.78-2.34-1.78-2.34-1.449-0.992 0.112-0.972 0.112-0.972 1.607 0.112 2.451 1.648 2.451 1.648 1.427 2.447 3.745 1.74 4.66 1.331 0.144-1.035 0.556-1.74 1.013-2.14-3.553-0.4-7.288-1.776-7.288-7.907 0-1.747 0.62-3.173 1.647-4.293-0.18-0.404-0.72-2.031 0.14-4.235 0 0 1.34-0.429 4.4 1.64 1.28-0.356 2.64-0.532 4-0.54 1.36 0.008 2.72 0.184 4 0.54 3.040-2.069 4.38-1.64 4.38-1.64 0.86 2.204 0.32 3.831 0.16 4.235 1.020 1.12 1.64 2.547 1.64 4.293 0 6.147-3.74 7.5-7.3 7.893 0.56 0.48 1.080 1.461 1.080 2.96 0 2.141-0.020 3.861-0.020 4.381 0 0.42 0.28 0.92 1.1 0.76 6.401-2.099 10.981-8.099 10.981-15.159 0-8.836-7.164-16-16-16z'></path>
              </svg>
            </div>
          </div>
          <div className='flex relative pb-12'>
            <div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
              <div className='h-full w-1 bg-gray-800 pointer-events-none'></div>
            </div>
            <div className='flex-shrink-0 rounded-full prim-background inline-flex items-center justify-center text-white relative z-10'>
              <svg
                className='fill-current w-10 p-2 text-gray-500 hover:text-gray-100
                  '
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
                aria-hidden='true'
                focusable='false'
              >
                <path d='M32 10.909l-0.024-0.116-0.023-0.067c-0.013-0.032-0.024-0.067-0.040-0.1-0.004-0.024-0.020-0.045-0.027-0.067l-0.047-0.089-0.040-0.067-0.059-0.080-0.061-0.060-0.080-0.060-0.061-0.040-0.080-0.059-0.059-0.053-0.020-0.027-14.607-9.772c-0.463-0.309-1.061-0.309-1.523 0l-14.805 9.883-0.051 0.053-0.067 0.075-0.049 0.060-0.067 0.080c-0.027 0.023-0.040 0.040-0.040 0.061l-0.067 0.080-0.027 0.080c-0.027 0.013-0.027 0.053-0.040 0.093l-0.013 0.067c-0.025 0.041-0.025 0.081-0.025 0.121v9.996c0 0.059 0.004 0.12 0.013 0.18l0.013 0.061c0.007 0.040 0.013 0.080 0.027 0.115l0.020 0.067c0.013 0.036 0.021 0.071 0.036 0.1l0.029 0.067c0 0.013 0.020 0.053 0.040 0.080l0.040 0.053c0.020 0.013 0.040 0.053 0.060 0.080l0.040 0.053 0.053 0.053c0.013 0.017 0.013 0.040 0.040 0.040l0.080 0.056 0.053 0.040 0.013 0.019 14.627 9.773c0.219 0.16 0.5 0.217 0.76 0.217s0.52-0.080 0.76-0.24l14.877-9.875 0.069-0.077 0.044-0.060 0.053-0.080 0.040-0.067 0.040-0.093 0.021-0.069 0.040-0.103 0.020-0.060 0.040-0.107v-10c0-0.067 0-0.127-0.021-0.187l-0.019-0.060 0.059 0.004zM16.013 19.283l-4.867-3.253 4.867-3.256 4.867 3.253-4.867 3.253zM14.635 10.384l-5.964 3.987-4.817-3.221 10.781-7.187v6.424zM6.195 16.028l-3.443 2.307v-4.601l3.443 2.301zM8.671 17.695l5.964 3.987v6.427l-10.781-7.188 4.824-3.223v-0.005zM17.387 21.681l5.965-3.973 4.817 3.227-10.783 7.187v-6.427zM25.827 16.041l3.444-2.293v4.608l-3.444-2.307zM23.353 14.388l-5.964-3.988v-6.44l10.78 7.187-4.816 3.224z'></path>
              </svg>
            </div>
          </div>
          <div className='flex relative'>
            <div className='flex-shrink-0 rounded-full prim-background inline-flex items-center justify-center text-white relative z-10'>
              <svg
                className='fill-current w-10 p-2 text-gray-500 hover:text-gray-100
                    '
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 26 28'
                aria-hidden='true'
                focusable='false'
              >
                <path d='M25.312 6.375c-0.688 1-1.547 1.891-2.531 2.609 0.016 0.219 0.016 0.438 0.016 0.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-0.828-7.75-2.266 0.406 0.047 0.797 0.063 1.219 0.063 2.359 0 4.531-0.797 6.266-2.156-2.219-0.047-4.078-1.5-4.719-3.5 0.313 0.047 0.625 0.078 0.953 0.078 0.453 0 0.906-0.063 1.328-0.172-2.312-0.469-4.047-2.5-4.047-4.953v-0.063c0.672 0.375 1.453 0.609 2.281 0.641-1.359-0.906-2.25-2.453-2.25-4.203 0-0.938 0.25-1.797 0.688-2.547 2.484 3.062 6.219 5.063 10.406 5.281-0.078-0.375-0.125-0.766-0.125-1.156 0-2.781 2.25-5.047 5.047-5.047 1.453 0 2.766 0.609 3.687 1.594 1.141-0.219 2.234-0.641 3.203-1.219-0.375 1.172-1.172 2.156-2.219 2.781 1.016-0.109 2-0.391 2.906-0.781z'></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
