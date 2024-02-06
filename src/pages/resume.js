// function ResumePage() {
//   return <object data="/resume.pdf" width="800" height="500"></object>;
// }

// export default ResumePage;

import Link from "next/link";
import { motion } from "framer-motion";

const animate = {
  initial: {
    opacity: 0,
    y: 30,
  },

  final: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.1,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

function ResumePage() {
  return (
    <article className="bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-2 sm:px-4">
        <div className="sticky top-0 flex justify-end  px-8 py-12 sm:justify-center sm:px-8">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="rounded-full bg-white p-4 shadow-lg transition-[margin] duration-500  hover:mb-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={11.644}
                height={11.385}
              >
                <g dataname="Group 40">
                  <g
                    dataname="Group 39"
                    fill="none"
                    stroke="#0D1117"
                    strokeLinecap="round"
                    strokeWidth={2}
                  >
                    <path dataname="Line 6" d="M10.23 1.414 1.673 9.971" />
                    <path dataname="Line 7" d="M9.971 9.971 1.414 1.414" />
                  </g>
                </g>
              </svg>
            </motion.div>
          </Link>
        </div>
        <motion.div
          variants={animate}
          initial="initial"
          animate="final"
          className="p-8 tracking-wider text-gray-500 "
        >
          <h1 className="font-serif text-5xl font-bold tracking-tighter text-gray-800 dark:text-gray-200">
            Resume
          </h1>
          <div className="my-10 w-fit  rounded-full bg-white px-4 py-2 text-xs font-bold tracking-tight  dark:bg-gray-800 dark:text-gray-400 ">
            Feb 1, 2024
          </div>
          <object
            data="/resume.pdf"
            className="h-[70svh] w-full sm:h-svh"
          ></object>
        </motion.div>
      </div>
    </article>
  );
}

export default ResumePage;
