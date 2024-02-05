import Image from "next/image";

function Spotify({ track }) {
  if (!track) {
    return <div>Loading...</div>;
  }
  return (
    <div className="bg-gradient-to-br from-gray-100  to-white dark:from-gray-900 dark:to-black overflow-hidden hidden col-span-6 border-r  dark:bg-black dark:border-gray-800 md:flex md:col-span-5 lg:col-span-4 px-5 pt-5 pb-2 flex-col justify-end items-end">
      <div className="border-b dark:border-gray-800 py-2 w-full text-end text-sm text-gray-400  dark:text-gray-500">
        {track.isPlaying ? "Currently Playing" : "Last Played"}
        <i className="fab fa-spotify text-green-500 text-lg"></i>
      </div>
      <a
        href={track.trackLink}
        target="_blank"
        className="py-2 text-right flex items-center gap-3"
      >
        <div>
          <h2 className="text-lg leading-none text-gray-500 dark:text-gray-200 tracking-wide  pb-1">
            {track.trackTitle}
          </h2>
          <h3 className="text-sm text-gray-400 dark:text-gray-500 ">
            {track.artists.join(", ")}
          </h3>
        </div>

        <Image
          className="aspect-square rounded-full w-14"
          src={track.trackImage.url}
          alt="spotify track album art"
          width={track.trackImage.width}
          height={track.trackImage.height}
          priority
        />
      </a>
    </div>
  );
}

export default Spotify;
