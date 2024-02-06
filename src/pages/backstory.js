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

function Backstory() {
  return (
    <article className="bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-2 sm:px-4">
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
            How it Started.
          </h1>
          <div className="my-10 w-fit rounded-full bg-white px-4 py-2 text-xs font-bold tracking-tight  dark:bg-gray-800 dark:text-gray-400 ">
            Feb 1, 2024
          </div>
          <p className="py-4">
            In the 5th grade, my world changed when my dad brought home our
            first PC—a Pentium 4 with a CRT monitor. Back then, I didn't
            understand much about computers, but my curiosity was ignited.
            Little did I know that this curiosity would set the stage for a
            journey that would pull me out of the depths and become the most
            rewarding experience of my life.
          </p>
          <p className="py-4">
            Spending countless hours exploring every nook and cranny of that PC,
            I unintentionally formatted my dad's thesis documents twice. Despite
            the setbacks, the bond between me and the computer grew stronger,
            marking the beginning of a journey into the world of technology.
          </p>
          <p className="py-4">
            In 8th grade, a winter vacation homework assignment introduced me to
            HTML. What started as a simple task to replicate our school's
            website turned into a meticulous project, earning the highest grade.
            My teacher's words—beyond expectations from an 8th grader—planted
            the seed of confidence and passion for coding.
          </p>

          <p className="py-4">
            In 11th grade, a Sony Xperia Android phone entered the scene.
            Rooting the phone, exploring boot-loaders, and installing custom OSs
            became my new playground. I learned to solve problems, often ones I
            created while traversing the vast landscape of the internet.
          </p>
          <p className="py-4">
            With the weight of expectations to pursue medicine and facing a low
            point in my life, I made a pivotal decision. Convincing my family, I
            shifted gears towards software engineering. This marked the
            beginning of a path I would navigate on my own.
          </p>
          <p className="py-4">
            My father, unfamiliar with the world of software engineering,
            couldn't provide guidance. I had to figure out my path
            independently. The transition wasn't without challenges, but it was
            a journey filled with self-discovery and determination.
          </p>
          <p className="py-4">
            Finally, I started coding. Small projects turned into my escape,
            pulling me out of a metaphorical grave. Coding became more than a
            skill—it became the most rewarding pursuit of my time.
          </p>
          <p className="py-4">
            As I reflect on this journey—from accidental formatting to coding as
            a source of rejuvenation—I realize the power of resilience and the
            impact of following one's passion. Coding is not just about the
            syntax or algorithms; it's a journey of self-discovery,
            problem-solving, and the relentless pursuit of knowledge.
          </p>
          <p className="py-4">
            In every line of code, I find fulfillment, and in every project, I
            discover the limitless possibilities of creation. Coding has been
            more than a skill—it has been my compass, guiding me through
            challenges and towards a future filled with excitement and endless
            potential.
          </p>
          <p className="py-4">
            This is my coding journey—a story of embracing the code and finding
            a rewarding path that I can truly call my own.
          </p>
        </motion.div>
      </div>
    </article>
  );
}

export default Backstory;
