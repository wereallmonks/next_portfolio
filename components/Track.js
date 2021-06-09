export default function Track(track) {
    return (
      <div className="flex flex-row items-baseline border-b border-gray-100 dark:border-gray-800 max-w-3xl w-full mt-8">
        <p className="text-sm font-bold text-gray-400 dark:text-gray-600">
          {track.ranking}
        </p>
        <div>
          <a href={track.songUrl} >
            {track.title}
          </a>
          <p>
            {track.artist}
          </p>
        </div>
      </div>
    );
  }