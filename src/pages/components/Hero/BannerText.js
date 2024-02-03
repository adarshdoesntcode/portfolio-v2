import { Envelope, Github, Linkedin } from "./Svg";

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

export default BannerText;
