import Image from "next/image";
import Reveal from "../Reveal/Reveal";

function Spotify({ track }) {
  if (!track) {
    return <div>Loading...</div>;
  }
  return (
    <div className="col-span-6 hidden  flex-col items-end justify-end overflow-hidden border-r bg-gradient-to-br from-gray-100  to-white px-5 pb-2 pt-5 dark:border-gray-800 dark:bg-black dark:from-gray-900 dark:to-black md:col-span-5 md:flex lg:col-span-4">
      <Reveal delay={0.2} duration={1}>
        <div className="w-full border-b py-2 text-end text-sm text-gray-400 dark:border-gray-800  dark:text-gray-500">
          {track.isPlaying ? "Currently Playing" : "Last Played"}
          <i className="fab fa-spotify text-lg text-green-500"></i>
        </div>
        <a
          href={track.trackLink}
          target="_blank"
          className="flex items-center gap-3 py-2 text-right"
        >
          <div>
            <h2 className="pb-1 text-lg leading-none tracking-wide text-gray-500  dark:text-gray-200">
              {track.trackTitle}
            </h2>
            <h3 className="text-sm text-gray-400 dark:text-gray-500 ">
              {track.artists.join(", ")}
            </h3>
          </div>

          <Image
            className="aspect-square w-14 rounded-full"
            src={track.trackImage.url}
            alt="spotify track album art"
            width={track.trackImage.width}
            height={track.trackImage.height}
            priority
          />
        </a>
      </Reveal>
    </div>
  );
}

export default Spotify;
