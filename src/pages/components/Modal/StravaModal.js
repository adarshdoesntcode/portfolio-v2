import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function formatDate(dateString) {
  const date = new Date(dateString);

  const day = date.getDate();

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthIndex = date.getMonth();
  const month = monthNames[monthIndex];
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

const anim = {
  initial: { scale: 0, y: "-60%", x: "-50%" },
  enter: { scale: 1, y: "-60%", x: "-50%" },
  exit: { scale: 0, y: "-60%", x: "-50%", transition: { duration: 0 } },
};

function StravaModal({ stravaData, active }) {
  if (!stravaData) return;
  const modalRef = useRef(null);

  useEffect(() => {
    function movement({ clientX, clientY }) {
      if (!modalRef.current) {
        return;
      }
      modalRef.current.style.top = `${clientY}px`;
      modalRef.current.style.left = `${clientX}px`;
    }
    window.addEventListener("mousemove", movement);
    return () => window.removeEventListener("mousemove", movement);
  }, []);

  return (
    <motion.div
      ref={modalRef}
      variants={anim}
      initial="initial"
      animate={active ? "enter" : "exit"}
      className="pointer-events-none fixed z-50  border   bg-gradient-to-br from-gray-100 to-white p-4 shadow-xl dark:border-gray-800 dark:from-gray-900   dark:to-black "
    >
      <div className="  text-gray-700 dark:text-gray-300">
        <div className="mb-2 w-full border-b border-green-500  pb-2 text-sm text-gray-400 ">
          Last Ride on {formatDate(stravaData.start_date_local)}
        </div>

        <div className="mt-2 flex justify-evenly gap-2 ">
          <div className="flex flex-col items-center  p-2">
            <div className="text-lg leading-none">
              {(stravaData.distance / 1000).toFixed(2)}
            </div>
            <div>
              <span className="text-xs text-gray-400">km</span>
              <svg
                viewBox="0 0 8 8"
                fill="none"
                className="ml-1 inline-block h-2 w-2 text-gray-600  dark:text-gray-300"
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
          <div className="flex flex-col items-center p-2">
            <div className="text-lg leading-none">
              {(stravaData.moving_time / 3600).toFixed(2)}
            </div>
            <div>
              <span className="text-xs text-gray-400">hrs</span>
              <svg
                viewBox="0 0 8 8"
                fill="none"
                className="ml-1 inline-block h-2 w-2 text-gray-600  dark:text-gray-300"
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
          <div className="flex flex-col items-center p-2">
            <div className="text-lg leading-none">
              {(stravaData.average_speed * 3.6).toFixed(2)}
            </div>
            <div>
              <span className="text-xs text-gray-400">km/h</span>
              <svg
                viewBox="0 0 8 8"
                fill="none"
                className="ml-1 inline-block h-2 w-2 text-gray-600  dark:text-gray-300"
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
    </motion.div>
  );
}

export default StravaModal;
