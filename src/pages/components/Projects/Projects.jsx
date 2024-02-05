function Projects() {
  return (
    <div className="border-b dark:border-gray-800 dark:bg-black">
      <div className="mx-auto grid max-w-7xl grid-cols-12 px-4 font-serif xl:px-10">
        <div className="dot-matrix col-span-12 border-x p-4 pb-6 pt-8 dark:border-gray-800 sm:px-8 sm:pb-6 sm:pt-8">
          <h2 className="flex items-center gap-2 font-serif text-lg font-semibold uppercase leading-none tracking-wide text-gray-800 dark:text-gray-200">
            <div className="w-6 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-green-600"
                viewBox="0 0 640 512"
              >
                <path d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
              </svg>
            </div>{" "}
            Selected Projects
          </h2>
          <div className="mt-6 grid grid-cols-6 gap-6">
            <a
              href="https://github.com/adarshdoesntcode/crowdfundr"
              target="_blank"
              className="group col-span-6 cursor-pointer rounded-xl border bg-gradient-to-br from-gray-100 via-white to-gray-100 p-5  hover:from-gray-200 hover:via-white  hover:to-gray-200 dark:border-gray-800 dark:from-gray-900 dark:via-black dark:to-gray-900 hover:dark:from-gray-800 hover:dark:via-black hover:dark:to-gray-800 sm:p-7 lg:col-span-2"
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold leading-none  tracking-tight text-gray-800 dark:text-gray-200">
                    CrowdFundr.
                  </h2>
                  <p className="mb-2 py-4 font-serif tracking-wide text-gray-500">
                    A fund collection platform like Gofundme and Kickstarter
                    that uses Khalti payment gateaway.
                  </p>
                </div>
                <div>
                  <div className="flex gap-1">
                    <div className="flex items-center rounded-full bg-green-500/10 px-3 py-1  text-xs font-medium leading-5 tracking-wide text-green-600">
                      Node.js
                    </div>
                    <div className="flex items-center rounded-full bg-green-500/10 px-3  text-xs font-medium leading-5 tracking-wide text-green-600">
                      Express.js
                    </div>

                    <div className="flex items-center rounded-full bg-green-500/10 px-3  text-xs font-medium leading-5 tracking-wide text-green-600">
                      MongoDB
                    </div>
                  </div>
                  <div className="ml-auto mt-3 flex w-fit  items-center gap-2 rounded-lg">
                    <div className="text-sm font-bold leading-none text-gray-800 dark:text-gray-200">
                      View More
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
              </div>
            </a>
            <a
              href="https://github.com/adarshdoesntcode/asstime-webRTC"
              target="_blank"
              className="group col-span-6 cursor-pointer rounded-xl border bg-gradient-to-br from-gray-100 via-white to-gray-100 p-5  hover:from-gray-200 hover:via-white  hover:to-gray-200 dark:border-gray-800 dark:from-gray-900 dark:via-black dark:to-gray-900 hover:dark:from-gray-800 hover:dark:via-black hover:dark:to-gray-800 sm:p-7 lg:col-span-2"
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold leading-none  tracking-tight text-gray-800 dark:text-gray-200">
                    Facetime Clone.
                  </h2>
                  <p className="mb-2 py-4 font-serif tracking-wide  text-gray-500">
                    A simple group video conferencing webapp that is made with
                    webRTC and socket.
                  </p>
                </div>
                <div>
                  <div className="flex gap-1">
                    <div className="flex items-center rounded-full bg-green-500/10 px-3 py-1  text-xs font-medium leading-5 tracking-wide text-green-600">
                      Node.js
                    </div>
                    <div className="flex items-center rounded-full bg-green-500/10 px-3  text-xs font-medium leading-5 tracking-wide text-green-600">
                      WebRTC
                    </div>

                    <div className="flex items-center rounded-full bg-green-500/10 px-3  text-xs font-medium leading-5 tracking-wide text-green-600">
                      Socket.io
                    </div>
                  </div>
                  <div className="ml-auto mt-3 flex w-fit  items-center gap-2 rounded-lg">
                    <div className="text-sm font-bold leading-none text-gray-800 dark:text-gray-200">
                      View More
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
              </div>
            </a>

            <a
              href="https://github.com/adarshdoesntcode/portfolio-v2"
              target="_blank"
              className="group col-span-6 cursor-pointer rounded-xl border bg-gradient-to-br from-gray-100 via-white to-gray-100 p-5  hover:from-gray-200 hover:via-white  hover:to-gray-200 dark:border-gray-800 dark:from-gray-900 dark:via-black dark:to-gray-900 hover:dark:from-gray-800 hover:dark:via-black hover:dark:to-gray-800 sm:p-7 lg:col-span-2"
            >
              <div className="flex h-full flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold leading-none  tracking-tight text-gray-800 dark:text-gray-200">
                    Portfolio.
                  </h2>

                  <p className="mb-2 py-4 font-serif tracking-wide  text-gray-500">
                    A clean, simple and fun portfolio website that trys to show
                    off my design taste and skills.
                  </p>
                </div>
                <div>
                  <div className="flex gap-1">
                    <div className="flex items-center rounded-full bg-green-500/10 px-3 py-1  text-xs font-medium leading-5 tracking-wide text-green-600">
                      Next
                    </div>
                    <div className="flex items-center rounded-full bg-green-500/10 px-3  text-xs font-medium leading-5 tracking-wide text-green-600">
                      Tailwind
                    </div>

                    <div className="flex items-center rounded-full bg-green-500/10 px-3  text-xs font-medium leading-5 tracking-wide text-green-600">
                      Framer Motion
                    </div>
                  </div>

                  <div className="ml-auto mt-3 flex w-fit  items-center gap-2 ">
                    <div className="text-sm font-bold leading-none text-gray-800 dark:text-gray-200">
                      View More
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
              </div>
            </a>
          </div>
          <div className="group ml-auto mt-5 flex w-fit items-center transition-all ">
            <div className="cursor-pointer text-sm font-bold leading-none text-gray-800 underline decoration-green-500 underline-offset-4 dark:text-gray-200 group-hover:dark:text-white">
              View Full Project Archive
            </div>
            <div className="flex items-center justify-center p-2">
              <svg
                viewBox="0 0 8 8"
                fill="none"
                className="h-3 w-3 stroke-gray-800 group-hover:stroke-green-500 dark:stroke-gray-200"
              >
                <path
                  d="M6.8291 6.82849L6.8291 1.17163M6.8291 1.17163L1.17225 1.17163M6.8291 1.17163L1.17188 6.82849"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
