import { useEffect, useState } from "react";
import Reveal from "../Reveal/Reveal";

function Title() {
  const [greeting, setGreeting] = useState("Good morning!!");

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);
  return (
    <div className="col-span-10 border-x px-4 py-5  dark:border-gray-800 sm:px-8 md:col-span-3">
      <div className="relative w-fit">
        <Reveal delay={0.2} duration={1}>
          <h1 className="select-none py-2 font-tanker text-5xl font-bold leading-none  tracking-wide text-gray-800 dark:text-gray-200 sm:tracking-wider md:text-8xl">
            adarsh.
          </h1>

          <div
            className="absolute right-0 top-0 inline-block -translate-y-1/4 translate-x-full rounded-full bg-green-500 px-3 py-2 font-serif text-sm font-medium leading-4 tracking-wide  text-black md:-translate-y-0  md:px-4 md:py-3 "
            style={{ opacity: "1" }}
          >
            <span className="inline-block ">{greeting}</span>
            <svg
              viewBox="0 0 22 18"
              fill="none"
              className="absolute -bottom-[9px] left-[7px] w-5 text-green-500"
            >
              <path
                d="M20.9991 8C17.4991 12.5 13.4991 16 7.69476 17.4776C8.49908 10.5 6.99908 8 0.939453 3.39334L1.79694 0L21.1874 4.8999L20.9991 8Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

const getGreeting = () => {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return "Good morning!";
  } else if (currentHour >= 12 && currentHour < 17) {
    return "Good afternoon!";
  } else if (currentHour >= 17 && currentHour < 22) {
    return "Good evening!";
  } else {
    return "Good night!";
  }
};

export default Title;
