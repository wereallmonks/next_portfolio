import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id='site-footer'
      className='bg-gradient-to-b from-vienna to-spanish z-50 mt-1'
    >
      <div className='vzion-wrapper text-center mt-6 py-2 pt-16'>
        <div className='flex items-center -ink--light mx-auto'>
          <p className='m-0 text-gray-300 text-sm'>
            © 2022 Made with <span className='emoji'>⚡</span> by{" "}
            <Link href='/'>Claudia Vizena</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
