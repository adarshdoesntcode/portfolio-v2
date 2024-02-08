import Link from "next/link";
import Reveal from "../Reveal/Reveal";

function BackStory() {
  return (
    <div className="blog group order-2 col-span-12 cursor-pointer border-x p-8 font-serif dark:border-gray-800  md:order-1 md:col-span-6 md:border-r-0">
      <Link
        href="/backstory"
        aria-label="Go to Blog page of Adarsh's backstory of how he got into coding"
      >
        <Reveal>
          <h2 className="flex items-center gap-2 font-serif text-lg font-semibold uppercase leading-none tracking-wide text-gray-800 dark:text-gray-200">
            <div className="w-6 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="fill-green-600"
              >
                <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" />
              </svg>
            </div>{" "}
            How it Started.
          </h2>
          <p className="py-4 font-serif text-base tracking-wide text-gray-500  ">
            A short personal story related to how I got into computers and
            software and discovered joy amid countless hours of frustration
            while coding.
          </p>

          <div className=" mt-3 flex w-full items-center justify-between  ">
            <div className=" w-fit rounded-full bg-white px-4 py-2 text-xs font-bold tracking-tight dark:bg-gray-900 dark:text-gray-400 ">
              Feb 1, 2024
            </div>
            <div className="flex w-fit items-center gap-2">
              <div className="text-sm font-bold leading-none text-gray-800 dark:text-gray-200">
                Read More
              </div>
              <div className="flex items-center justify-center rounded-full border-2 border-green-500 p-2  transition-all group-hover:bg-green-500">
                <svg
                  viewBox="0 0 8 8"
                  fill="none"
                  className="h-2 w-2 text-gray-800 group-hover:text-white dark:text-white"
                >
                  <path
                    d="M6.8291 6.82849L6.8291 1.17163M6.8291 1.17163L1.17225 1.17163M6.8291 1.17163L1.17188 6.82849"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </Reveal>
      </Link>
    </div>
  );
}

export default BackStory;
