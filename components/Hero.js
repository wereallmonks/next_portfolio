import Fade from "react-reveal/Fade";
import Image from "next/image";
import profilePic from "../public/claudiamarie-frontpage-opt.png";

export default function Hero() {
  return (
    <div className='min-h-40vh pb-20 sm:pb-0 text-left '>
      <div className='grid grid-cols-3 md:grid-flow-col mr-12 -mt-32 md:-mt-22 md:mr-0 sm:gap-0'>
        <div className='col-span-2 solid-sq gradient--bg px-1 sm:px-4 sm:py-10'>
          <div className='grid justify-end relative text-wrap transform translate-x-1 md:translate-x-1/4 lg:translate-x-1/3 translate-y-32 z-50 pt-6 sm:pt-0'>
            <Fade duration={3000}>
              <h1 className='text-4xl md:text-6xl text-left text-mushroom'>
                Writing my
                <br />
                ideas in code.
              </h1>
            </Fade>
            <Fade delay={1000} duration={6000}>
              <p className='text-mushroom no-margin  text-lg md:text-xl text-left w-11/12 md:w-7/12 xl:w-6/12 leading-none'>
                My name is Claudia Marie Vizena and I specialize in developing
                websites and apps with Javascript
                <svg
                  className='inline-flex visible fill-current animate-bounce transform text-white hover:text-white h-9 w-8 mx-auto pt-2 pl-10'
                  xmlns='http://www.w3.org/2000/svg'
                  fillRule='evenodd'
                  clipRule='evenodd'
                >
                  <path d='M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z' />
                </svg>
              </p>
            </Fade>
          </div>
        </div>
        <div className='aspect-w-16 aspect-h-9 object-cover -ml-2 -mb-4 p-0 w-full h-2/5 md:h-4/5  md:min-w-hero-min col-span-1 lg:max-w-[19rem]] transform translate-y-32  md:translate-y-20 -translate-x-2 sm:-translate-x-28 bg-transparent grid items-center sm:mx-10 sm:my-4 lg:mr-12 lg:my-10 shadow-2xl'>
          <Image
            src={profilePic}
            className='w-full h-auto'
            alt='claudia marie clutching books in front of vines'
            width={812}
            height={880}
            placeholder='blur' // Blur-up while loading
            priority
          />
        </div>
      </div>
    </div>
  );
}
