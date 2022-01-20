export default function Track(track) {
  return (
    <div className='relative flex sm:flex-nowrap items-center mx-0 my-1'>
      <span className='text-xl font-bold text-mushroom mr-2 text-opacity-90'>
        {track.ranking}
      </span>
      <a
        className='alpha mr-1 text-gray-100 text-sm text-bold underline hover:no-underline'
        href={track.songUrl}
      >
        {track.title}
      </a>
      <span className='mx-2 border-l-2 border-spanish border-opacity-70 h-5 inline-block transform -skew-x-12'></span>
      <p className='col-span-full alpha text-xs  text-gray-100 text-opacity-80'>
        {track.artist}
      </p>
    </div>
  );
}
