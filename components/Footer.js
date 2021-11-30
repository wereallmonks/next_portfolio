export default function Footer() {
  return (
    <footer
      id='site-footer'
      className='bg-gradient-to-b from-vienna to-spanish z-50 mt-1'
    >
      <div className='vzion-wrapper text-center mt-6 py-2 pt-16'>
        <div className='flex items-center -ink--light mx-auto'>
          <p className='m-0 text-gray-300 text-sm'>
            © 2021 Made with <span className='emoji'>⚡</span> by{" "}
            <a href='/'>Claudia Vizena</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
