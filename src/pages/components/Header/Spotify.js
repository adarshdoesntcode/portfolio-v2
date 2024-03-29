import Image from "next/image";
import useSWR from "swr";
import Reveal from "../Reveal/Reveal";

const fetcher = (url) => fetch(url).then((r) => r.json());

function Spotify() {
  const { data, isLoading } = useSWR("/api/spotify", fetcher);

  if (isLoading) {
    return (
      <div className="col-span-6 hidden  flex-col items-end justify-end overflow-hidden border-r bg-gradient-to-br from-gray-100  to-white px-5 pb-2 pt-5 dark:border-gray-800 dark:bg-black dark:from-gray-900 dark:to-black md:col-span-5 md:flex lg:col-span-4"></div>
    );
  }

  return (
    <div className="col-span-6 hidden  flex-col items-end justify-end overflow-hidden border-r bg-gradient-to-br from-gray-100  to-white px-5 pb-2 pt-5 dark:border-gray-800 dark:bg-black dark:from-gray-900 dark:to-black md:col-span-5 md:flex lg:col-span-4">
      <div className="w-full border-b py-2 text-end text-sm text-gray-400 dark:border-gray-800  dark:text-gray-500">
        {data.isPlaying ? "Currently Playing" : "Last Played"}
      </div>
      <Reveal>
        <a
          href={data.trackLink}
          target="_blank"
          className=" flex items-center gap-3 py-2 text-right"
          aria-label="Go to Spotify"
        >
          <div>
            <h2 className="pb-1 text-lg leading-none tracking-wide text-gray-500  dark:text-gray-200">
              {data.trackTitle}
            </h2>
            <h3 className="text-sm text-gray-400 dark:text-gray-500 ">
              {data.artists.join(", ")}
            </h3>
          </div>

          <Image
            className="aspect-square w-14 rounded-full"
            src={data.trackImage.url}
            alt="spotify track album art"
            width={56}
            height={56}
            priority
          />
        </a>
      </Reveal>
    </div>
  );
}

export default Spotify;
