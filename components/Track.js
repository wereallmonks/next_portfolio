export default function Track(track) {
  return (
    <div className='relative flex sm:flex-nowrap items-center mt-2 mb-2'>
      <span className='text-2xl font-bold text-gray-200 mr-2 text-opacity-90'>
        {track.ranking}
      </span>
      <a
        className='alpha mr-1 text-gray-300 text-sm text-bold underline hover:no-underline'
        href={track.songUrl}
      >
        {track.title}
      </a>
      <span className='mx-2 border-l-2 border-yellow-500 border-opacity-70 h-5 inline-block transform -skew-x-12'></span>
      <p className='col-span-full alpha text-xs  text-gray-300 text-opacity-60'>
        {track.artist}
      </p>
    </div>
  );
}
