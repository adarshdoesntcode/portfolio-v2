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

function RoadmapPage() {
  return (
    <article className="bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-2 sm:px-4">
        <div className="sticky top-0 flex justify-end px-8 py-12 sm:justify-center sm:px-8">
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
            Skill Set.
          </h1>
          <div className="my-10 w-fit rounded-full bg-white px-4 py-2 text-xs font-bold tracking-tight  dark:bg-gray-800 dark:text-gray-400">
            Feb 6, 2024
          </div>
          <p className="py-4">
            Throughout all these years i think i have made web development my
            strongest skill. I can comfortably work my way around
          </p>

          <div className="wrap flex flex-wrap gap-4 py-2">
            <div className="flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium leading-5 text-green-600">
              ReactJS
            </div>
            <div className="flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium leading-5 text-green-600">
              NextJS
            </div>
            <div className="flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium leading-5 text-green-600">
              Tailwind CSS
            </div>
            <div className="flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium leading-5 text-green-600">
              NodeJS
            </div>
            <div className="flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium leading-5 text-green-600">
              MongoDB
            </div>
            <div className="flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium leading-5 text-green-600">
              Postman
            </div>
            <div className="flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium leading-5 text-green-600">
              Terminal
            </div>
            <div className="flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium leading-5 text-green-600">
              FlexBox
            </div>
            <div className="flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium leading-5 text-green-600">
              Grid
            </div>
            <div className="flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium leading-5 text-green-600">
              Framer Motion
            </div>
            <div className="flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium leading-5 text-green-600">
              Socket.io
            </div>
            <div className="flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium leading-5 text-green-600">
              Supabase
            </div>
            <div className="flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium leading-5 text-green-600">
              Redux
            </div>
          </div>

          <p className="py-4">
            I've gained a solid comprehension of web application functioning and
            feel confident in my ability to swiftly grasp and learn new
            concepts.
          </p>

          <p className="py-4">
            These courses have played a crucial role in laying the foundation
            for my understanding.
          </p>
          <div className="py-4">
            <ul>
              <li className="pb-1 text-gray-700 underline decoration-green-500 underline-offset-4 dark:text-gray-400">
                <a
                  href="https://www.udemy.com/course/nextjs-react-the-complete-guide/"
                  target="_blank"
                  aria-label="Go to Udemy Page for Next.js 14 & React - The Complete Guide"
                >
                  Next.js 14 & React - The Complete Guide
                </a>
              </li>
              <li className="pb-1 text-gray-700 underline decoration-green-500 underline-offset-4 dark:text-gray-400">
                <a
                  href="https://www.udemy.com/course/the-ultimate-react-course/"
                  target="_blank"
                  aria-label="Go to Udemy Page for The Ultimate React Course 2024: React, Redux & More"
                >
                  The Ultimate React Course 2024: React, Redux & More
                </a>
              </li>
              <li className="pb-1 text-gray-700 underline decoration-green-500 underline-offset-4 dark:text-gray-400">
                <a
                  href="https://www.udemy.com/course/the-complete-nodejs-developer-course-2/"
                  target="_blank"
                  aria-label="Go to Udemy Page for The Complete Node.js Developer Course (3rd Edition)"
                >
                  The Complete Node.js Developer Course (3rd Edition)
                </a>
              </li>
              <li className="pb-1 text-gray-700 underline decoration-green-500 underline-offset-4 dark:text-gray-400">
                <a
                  href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
                  target="_blank"
                  aria-label="Go to Udemy Page for The Complete 2024 Web Development Bootcamp"
                >
                  The Complete 2024 Web Development Bootcamp
                </a>
              </li>
            </ul>
            and many more..
          </div>
          <div className="py-4">
            <h1 className="pb-2 font-serif text-xl font-bold text-gray-800 dark:text-gray-200">
              2024 Plans.
            </h1>
            This year, I aim to explore into 3D websites, gain a comprehensive
            understanding of Docker, and get myself fluent in Python
            programming.
          </div>

          <p className="py-4">
            <li>ThreeJS</li>
            <li>ThreeJS Fiber</li>
            <li>Docker</li>
            <li>Python</li>
          </p>
          <p className="py-4">
            I will still be working on my Web development skills, maybe trying
            out TypeScript and GSAP
          </p>
        </motion.div>
      </div>
    </article>
  );
}

export default RoadmapPage;
