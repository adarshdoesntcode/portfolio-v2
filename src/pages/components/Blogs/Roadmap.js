import Link from "next/link";
import Reveal from "../Reveal/Reveal";

function Roadmap() {
  return (
    <div className="blog group order-1 col-span-12 cursor-pointer border-x border-b p-8 font-serif dark:border-gray-800 md:order-2 md:col-span-6 md:border-b-0">
      <Link href="/roadmap">
        <Reveal delay={0.3} duration={1}>
          <h2 className="flex items-center gap-2 font-serif text-lg font-semibold uppercase leading-none tracking-wide text-gray-800 dark:text-gray-200">
            <div className="w-6 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="fill-green-600"
              >
                <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
              </svg>
            </div>{" "}
            Skill set roadmap.
          </h2>
          <p className="py-4 font-serif tracking-wide text-gray-500">
            A short personal history as it relates to design and development,
            and how I've found value in the cross-section between both
            disciplines.
          </p>
          <div className="ml-auto mt-3 flex w-fit  items-center gap-2 ">
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
        </Reveal>
      </Link>
    </div>
  );
}

export default Roadmap;
