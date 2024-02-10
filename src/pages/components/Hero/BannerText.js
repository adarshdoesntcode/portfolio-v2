import { motion, useAnimationControls } from "framer-motion";
import useSound from "use-sound";
import Reveal from "../Reveal/Reveal";
import RevealBulb from "../Reveal/RevealBulb";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import BookModal from "../Modal/BookModal";
import SketchModal from "../Modal/SketchModal";

const animate = {
  initial: {
    scale: 1,
    y: 0,
  },
  tap: { scale: 0.95, y: 3, transition: { duration: 0.05 } },
};

function BannerText({ sketch, book, theme, setTheme }) {
  const [bookHovered, setBookHovered] = useState(false);
  const [sketchHovered, setSketchHovered] = useState(false);
  const [clickSequence, setClickSequence] = useState([]);

  const bulbswitch = useRef(null);
  const fullRef = useRef(null);
  const stackRef = useRef(null);
  const [play] = useSound("/key.mp3");
  const [playswitch] = useSound("/switch.mp3");
  const clickControls = useAnimationControls();
  const clackControls = useAnimationControls();
  const switchControls = useAnimationControls();
  const fullControls = useAnimationControls();
  const stackControls = useAnimationControls();

  useEffect(() => {
    const timer = setTimeout(() => {
      setClickSequence([]);
    }, 1000);
    if (clickSequence.length === 2) {
      tiggerClickClack();
      setClickSequence([]);
    }
    return () => clearTimeout(timer);
  }, [clickSequence]);

  const tiggerClickClack = async () => {
    console.log("triggered");
    await fullControls.start({ scale: 1.2, transition: { delay: 0.2 } });
    await fullControls.start({ scale: 1 });
    await stackControls.start({ scale: 1.2 });
    await stackControls.start({ scale: 1 });
  };

  const handleClick = (index) => {
    if (clickSequence.length === 0 && index === 1) {
      setClickSequence([1]);
    } else if (
      clickSequence.length === 1 &&
      clickSequence[0] === 1 &&
      index === 2
    ) {
      setClickSequence([1, 2]);
    } else {
      setClickSequence([]);
    }
  };

  const toggleDarkMode = async () => {
    playswitch();
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
    await switchControls.start({ y: 3, transition: { duration: 0.15 } });
    await switchControls.start({ y: 0, transition: { duration: 0.15 } });
  };

  const playkeyClick = async () => {
    play();
    await clickControls.start("tap");
    await clickControls.start("initial");
  };
  const playkeyClack = async () => {
    play();
    await clackControls.start("tap");
    await clackControls.start("initial");
  };

  return (
    <>
      <div className="order-2 col-span-12 border-l border-r bg-gradient-to-bl from-gray-100 to-white p-4 py-8 font-tanker tracking-wider text-gray-700 dark:border-gray-800 dark:from-gray-900 dark:to-black sm:p-8 md:order-1 md:col-span-7 lg:pr-12">
        <div className="flex h-full flex-col justify-between">
          <div className="relative">
            <div className="absolute -top-8 right-5 w-10   sm:w-12 lg:right-4 lg:w-14 xl:right-6">
              <RevealBulb>
                <Bulb
                  toggleDarkMode={toggleDarkMode}
                  bulbswitch={bulbswitch}
                  switchControls={switchControls}
                />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="75"
                  height="55"
                  className="mt-4 hidden rotate-[-55deg] select-none stroke-gray-800 dark:stroke-gray-400 lg:block"
                >
                  <g
                    fill="none"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                  >
                    <path d="M2.682 52.074c13.744 5.461 33.286-2.781 36.734-17.97.904-3.985 2.262-11.811-2.116-14.288-9.604-5.432-14.071 19.662 1.59 16.363 6.477-1.365 11.752-7.415 15.898-12.193 4.924-5.671 9.156-11.901 14.08-17.571" />
                    <path d="M72.318 13.251c-1.697-4.046.258-7.902-.576-12.016-2.6 1.869-8.045 5.422-11.414 5.542" />
                  </g>
                </svg>
                <div className="hidden  select-none font-cursive text-xl font-bold leading-5 text-gray-800 dark:text-gray-400 lg:block">
                  {theme === "dark" ? "too dark??" : "too bright??"}
                </div>
              </RevealBulb>
            </div>

            <Reveal>
              <div className="mb-2 flex select-none items-center gap-5 pt-4 dark:text-gray-200 sm:mb-4">
                <span className="text-4xl sm:text-5xl ">i'm a </span>
                <span className="relative p-2">
                  <p className=" absolute left-0 top-0 translate-x-[-45%] translate-y-[-140%] rotate-[-4deg] font-cursive text-2xl tracking-tight dark:text-gray-400   sm:text-3xl md:translate-x-[-55%] md:translate-y-[-160%] md:rotate-[-10deg]">
                    learning
                  </p>

                  <LearnArrow />
                </span>
                <motion.span
                  onMouseDown={playkeyClick}
                  onClick={() => handleClick(1)}
                  variants={animate}
                  initial="initial"
                  animate={clickControls}
                  className="keycaps hidden cursor-pointer select-none text-black lg:inline-block"
                >
                  <p>click.</p>
                </motion.span>
                <motion.span
                  onMouseDown={playkeyClack}
                  onClick={() => handleClick(2)}
                  variants={animate}
                  initial="initial"
                  animate={clackControls}
                  className="keycaps hidden cursor-pointer select-none text-black lg:inline-block"
                >
                  <p>clack.</p>
                </motion.span>
                <span className=" inline  text-4xl underline decoration-green-500  decoration-2 underline-offset-8 sm:text-5xl lg:hidden">
                  Full
                </span>
              </div>

              <p className=" mb-5 inline-block select-none border-b-2 border-green-500 pb-1 text-4xl  dark:text-gray-200 sm:text-5xl">
                <motion.span
                  className="hidden   lg:inline-block"
                  animate={fullControls}
                  ref={fullRef}
                >
                  Full
                </motion.span>{" "}
                <motion.span
                  className="inline-block  "
                  animate={stackControls}
                  ref={stackRef}
                >
                  Stack
                </motion.span>{" "}
                Developer.
              </p>

              <div className="text-md select-none  font-serif tracking-wide text-gray-500 dark:text-gray-500 md:text-lg">
                <p className="pb-3">
                  I’m from Kathmandu and doing my Bachelors
                  <br className="hidden md:inline" /> in Software Engineering.
                </p>
                <p className="mb-12">
                  I'm interested in Next, React, Node and
                  <br className="hidden md:inline" />
                  sometimes like to{" "}
                  <span className="inline cursor-none font-medium   decoration-green-500 decoration-2 underline-offset-4  lg:hidden ">
                    sketch
                  </span>
                  <span
                    onMouseEnter={() => setSketchHovered(true)}
                    onMouseLeave={() => setSketchHovered(false)}
                    className="hidden cursor-none font-medium text-gray-800  underline decoration-green-500 decoration-2 underline-offset-4 dark:text-gray-300 lg:inline"
                  >
                    sketch
                  </span>
                  ,{" "}
                  <span
                    onMouseEnter={() => setBookHovered(true)}
                    onMouseLeave={() => setBookHovered(false)}
                    className=" hidden cursor-none font-medium text-gray-800 underline decoration-green-500 decoration-2 underline-offset-4 dark:text-gray-300 lg:inline"
                  >
                    read books
                  </span>{" "}
                  <span className=" inline  font-medium  decoration-green-500 decoration-2 underline-offset-4  lg:hidden">
                    read books
                  </span>{" "}
                  <br className="hidden  md:inline" />
                  and nerd over supercars.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="flex flex-row items-center justify-between sm:items-end">
              <div className="relative flex w-fit items-center gap-4 text-3xl text-gray-500 transition-all">
                <div className="w-7 ">
                  <a
                    href="https://github.com/adarshdoesntcode"
                    aria-label="Go to Adarsh's Github Profile"
                    target="_blank"
                  >
                    <Github />
                  </a>
                </div>
                <div className="w-7">
                  <a
                    href="mailto:adarsh.191605@ncit.edu.np"
                    aria-label="Mail adarsh"
                    target="_top"
                  >
                    <Envelope />
                  </a>
                </div>
                <div className="w-7">
                  <a
                    href="https://www.linkedin.com/in/adarsh-undefined-59859b243/"
                    aria-label="Adarsh's LinkedIn Profile"
                    target="_blank"
                  >
                    <Linkedin />
                  </a>
                </div>

                <div className="relative hidden p-4 lg:block ">
                  <div className="find-me-text select-none font-cursive text-xl text-gray-800 dark:text-gray-400 ">
                    find me !!
                  </div>
                  <FindArrow />
                </div>
              </div>
              <div className="relative">
                <Link href="/resume" aria-label="Go to Adasrh's Resume Page">
                  <div className="group flex cursor-pointer select-none items-center gap-1 rounded-full  bg-green-500 px-6 py-2 font-serif font-medium tracking-wide text-black transition-all md:px-7 md:py-3 ">
                    Resume{" "}
                    <svg
                      viewBox="0 0 8 8"
                      fill="none"
                      className="h-3 w-3 stroke-gray-900 transition-transform duration-200 group-hover:-translate-y-[3px] group-hover:translate-x-[3px]"
                    >
                      <path
                        d="M6.8291 6.82849L6.8291 1.17163M6.8291 1.17163L1.17225 1.17163M6.8291 1.17163L1.17188 6.82849"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {bookHovered && <BookModal book={book} active={bookHovered} />}
      {sketchHovered && <SketchModal sketch={sketch} active={sketchHovered} />}
    </>
  );
}

function Bulb({ toggleDarkMode, bulbswitch, switchControls }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 130"
      onClick={toggleDarkMode}
      className="lamp cursor-pointer"
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
      <motion.g className="switch" ref={bulbswitch} animate={switchControls}>
        <path
          style={{
            fill: "none",
            stroke: "#9ca3af",
            strokeWidth: 2,
            strokeMiterlimit: 10,
          }}
          d="M49 100v23"
        />
        <circle
          style={{
            fill: "#9ca3af",
            stroke: "#9ca3af",
            strokeWidth: 1,
            strokeMiterlimit: 10,
          }}
          cx={49}
          cy={125}
          r={2}
        />
      </motion.g>
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

const FindArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={70}
    className="find-me-arrow stroke-gray-800 dark:stroke-gray-400"
  >
    <path
      d="M9.22 7.263c-11.097 23.205-5.71 57.354 24 61M1.78 9.232c4.16-1.394 5.768-5.407 9.408-7.495.312 3.188 1.234 9.623 3.367 12.234"
      fill="none"
      // stroke="#000"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
    />
  </svg>
);

const LearnArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={15}
    className="learning-arrow absolute stroke-gray-800 dark:stroke-gray-400"
  >
    <path
      strokeLinejoin="round"
      d="M3.66 11.665c3.721-2.325 4.35-6.603 7.404-9.481 1.045 3.027 3.441 9.07 6.125 11.113"
      fill="none"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeMiterlimit={10}
    />
  </svg>
);

function Github() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      className="fill-gray-500 hover:fill-green-500 dark:fill-gray-400 hover:dark:fill-green-500 "
    >
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
    </svg>
  );
}

function Envelope() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="fill-gray-500 hover:fill-green-500 dark:fill-gray-400 hover:dark:fill-green-500 "
    >
      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4l217.6 163.2c11.4 8.5 27 8.5 38.4 0l217.6-163.2c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48H48zM0 176v208c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V176L294.4 339.2a63.9 63.9 0 0 1-76.8 0L0 176z" />
    </svg>
  );
}

function Linkedin() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="fill-gray-500 hover:fill-green-500 dark:fill-gray-400 hover:dark:fill-green-500 "
    >
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
    </svg>
  );
}

export default BannerText;
