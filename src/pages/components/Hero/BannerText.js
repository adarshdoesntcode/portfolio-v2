function BannerText() {
  return (
    <div className="col-span-12 hero order-2 md:order-1 md:col-span-7 lg:pr-12 p-4 py-8 sm:p-8 border-l border-r font-tanker tracking-wider text-gray-700">
      <div className="flex flex-col justify-between h-full">
        <div className="relative">
          <div className="absolute -top-8 right-0 sm:right-5 lg:right-4 xl:right-6 w-10 sm:w-14">
            <Bulb />
          </div>

          <div className="flex items-center gap-5 pt-4 mb-0 sm:mb-4">
            <span className="text-4xl sm:text-5xl">i'm a </span>
            <span className="p-2 relative">
              <p className="absolute font-cursive tracking-tight text-2xl sm:text-3xl underline learning-text">
                learning
              </p>

              <LearnArrow className="absolute learning-arrow" />
            </span>
            <span className="keycaps hidden lg:inline-block">
              <p>click.</p>
            </span>
            <span className="keycaps hidden lg:inline-block">
              <p>clack.</p>
            </span>
            <span className="inline text-4xl sm:text-5xl lg:hidden">Full</span>
          </div>
          <p className="text-4xl sm:text-5xl pb-5 inline-block">
            <span className="hidden lg:inline">Full</span> Stack Developer.
          </p>
          <div className="font-serif text-md md:text-lg tracking-wide text-gray-500">
            <p className="pb-3">
              I’m from Kathmandu and doing my Bachelors
              <br className="hidden md:inline" />
              in Software Engineering.
            </p>
            <p className="mb-12">
              I'm interested in Next, React, Node and
              <br className="hidden md:inline" />
              sometimes like to{" "}
              <span className="font-medium underline-offset-4 underline decoration-green-500 decoration-2 text-gray-800">
                sketch
              </span>
              ,{" "}
              <span className="font-medium underline underline-offset-4 decoration-green-500 decoration-2 text-gray-800">
                read books
              </span>
              <br className="hidden md:inline" />
              and nerd over supercars.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center sm:items-end justify-between">
          <div className="text-3xl w-fit text-gray-500 flex items-center gap-4 relative">
            <div className="w-7">
              <Github style={{ fill: "var(--gray-500)" }} />
            </div>
            <div className="w-7">
              <Envelope style={{ fill: "var(--gray-500)" }} />
            </div>
            <div className="w-7">
              <Linkedin style={{ fill: "var(--gray-500)" }} />
            </div>

            <div className="p-4 hidden relative sm:block">
              <div className="text-xl text-gray-800 find-me-text font-cursive">
                find me !!
              </div>
              <FindArrow className="find-me-arrow" />
            </div>
          </div>
          <div className="relative">
            <div className="hidden lg:block">
              <HireArrow className="hire-me-arrow" />
            </div>
            <div className="hire-me-text font-cursive text-gray-800 leading-none text-2xl hidden lg:block">
              wanna <br />
              hire ??
            </div>
            <div className="bg-green-500 text-white tracking-wider font-serif px-8 py-2 rounded-lg resume">
              Résumé
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bulb() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 130"
      className="lamp"
    >
      <defs>
        <radialGradient id="b" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop
            offset="0%"
            style={{
              stopColor: "#9ca3af",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="100%"
            style={{
              stopColor: "#374151",
              stopOpacity: 1,
            }}
          />
        </radialGradient>
        <linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style={{
              stopColor: "#374151",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="30%"
            style={{
              stopColor: "#374151",
              stopOpacity: 1,
            }}
          />
          <stop
            offset="75%"
            style={{
              stopColor: "#6b7280",
              stopOpacity: 0.7,
            }}
          />
          <stop
            offset="100%"
            style={{
              stopColor: "#374151",
              stopOpacity: 1,
            }}
          />
        </linearGradient>
      </defs>
      <circle
        className="bulb"
        style={{
          fill: "#fff",
          stroke: "#000",
          strokeWidth: 1,
        }}
        cx={30}
        cy={111}
        r={10.7}
      />
      <g className="switch">
        <path
          style={{
            fill: "none",
            stroke: "#2d2d2f",
            strokeWidth: 1,
            strokeMiterlimit: 10,
          }}
          d="M49 100v23"
        />
        <circle
          style={{
            fill: "#000",
            stroke: "#2d2d2f",
            strokeWidth: 1,
            strokeMiterlimit: 10,
          }}
          cx={49}
          cy={125}
          r={1.6}
        />
      </g>
      <path
        style={{
          fill: "url(#a)",
        }}
        d="M20.7 66.7h18.6v15.6H20.7z"
      />
      <path
        style={{
          fill: "#d1d5db",
        }}
        d="M30 0h1.5v66.7H30z"
      />
      <path
        style={{
          fill: "url(#b)",
        }}
        d="M30 80.3c-16.6 0-30 13.4-30 30h60c0-16.5-13.4-30-30-30z"
      />
    </svg>
  );
}

const FindArrow = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={70}
    className={className}
  >
    <path
      d="M9.22 7.263c-11.097 23.205-5.71 57.354 24 61M1.78 9.232c4.16-1.394 5.768-5.407 9.408-7.495.312 3.188 1.234 9.623 3.367 12.234"
      fill="none"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
    />
  </svg>
);

const HireArrow = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={75}
    height={55}
    className={className}
  >
    <g
      fill="none"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
    >
      <path d="M2.682 52.074c13.744 5.461 33.286-2.781 36.734-17.97.904-3.985 2.262-11.811-2.116-14.288-9.604-5.432-14.071 19.662 1.59 16.363 6.477-1.365 11.752-7.415 15.898-12.193 4.924-5.671 9.156-11.901 14.08-17.571" />
      <path d="M72.318 13.251c-1.697-4.046.258-7.902-.576-12.016-2.6 1.869-8.045 5.422-11.414 5.542" />
    </g>
  </svg>
);

const LearnArrow = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={15}
    className={className}
  >
    <path
      strokeLinejoin="round"
      d="M3.66 11.665c3.721-2.325 4.35-6.603 7.404-9.481 1.045 3.027 3.441 9.07 6.125 11.113"
      fill="none"
      stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeMiterlimit={10}
    />
  </svg>
);

function Github(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" {...props}>
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
    </svg>
  );
}

function Envelope(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4l217.6 163.2c11.4 8.5 27 8.5 38.4 0l217.6-163.2c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48H48zM0 176v208c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V176L294.4 339.2a63.9 63.9 0 0 1-76.8 0L0 176z" />
    </svg>
  );
}

function Linkedin(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
    </svg>
  );
}

export default BannerText;
