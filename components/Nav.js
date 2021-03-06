import { SocialM } from "./SocialM";
import Link from "next/link";

export default function Nav() {
  return (
    <header className='min-h-full bg-transparent bg-primary text-white grid relative z-50'>
      <div
        className='relative container mx-auto flex flex-wrap pt-0 pb-4 lg:py-6 md:px-10 pl-4 pr-4 flex-col md:flex-row items-end md:justify-end md:items-baseline
      '
      >
        <a
          href='/'
          className='flex title-font font-medium items-center text-white mb-2 mt-2 md:mb-0 sm:hidden'
        >
          <span className='sr-only'>Claudia Vizena | Developer</span>
        </a>
        <nav aria-label='Main Menu' className=''>
          <ul
            className='sm:ml-auto flex flex-nowrap items-center text-base justify-center'
            id='menubar1'
            role='menubar'
            aria-label='menu links'
          >
            <li role='none'>
              <Link href='/'>
                <a
                  className='text-bold mr-5 md:mr-12 hover:text-white uppercase'
                  role='menuitem'
                  aria-haspopup='true'
                  aria-expanded='false'
                  tabIndex='0'
                >
                  Home
                </a>
              </Link>
            </li>
            <li role='none'>
              <Link href='/about'>
                <a
                  className='text-bold mr-5 md:mr-12 hover:text-white uppercase'
                  role='menuitem'
                  aria-haspopup='true'
                  aria-expanded='false'
                  tabIndex='0'
                >
                  About
                </a>
              </Link>
            </li>
            <li role='none'>
              <Link href='/projects'>
                <a
                  className='text-bold mr-5 md:mr-12 hover:text-white uppercase'
                  role='menuitem'
                  aria-haspopup='true'
                  aria-expanded='false'
                  tabIndex='0'
                >
                  Projects
                </a>
              </Link>
            </li>
            <li role='none'>
              <Link href='/contact'>
                <a
                  className='contact-btn inline-flex sm:items-center bg-gray-800 py-2 px-3 text-bold hover:bg-gray-700 border-2 border-transparent hover:border-2 rounded text-xs font-thin mt-0 transition-all'
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
              </Link>
            </li>
          </ul>
        </nav>
        <div className='fixed right-0 top-20 md:top-8 mr-3 sm:mr-2 md:mr-2 pb-20 z-0 social-side self-end ml-10 social-side transform translate-y-10'>
          <div className='flex relative pb-12 md:pb-12'>
            <div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
              <div className='h-full w-[3px] bg-[#ebd2bc] bg-opacity-50 pointer-events-none'></div>
            </div>
          </div>
          <SocialM />
          <div className='flex relative'>
            <div className='flex-shrink-0 rounded-full prim-background inline-flex items-center justify-center text-white relative z-10'></div>
          </div>
        </div>
      </div>
    </header>
  );
}
