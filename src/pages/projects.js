import Link from "next/link";
import { motion } from "framer-motion";
import { getLatestProjects } from "./api/notion";

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

function ProjectsPage({ projects }) {
  if (!projects) return <div>loading...</div>;
  return (
    <article className="bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl p-8 px-6 tracking-wider text-gray-500">
        <div className="flex justify-end pb-12 pt-0 sm:justify-center sm:py-12">
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

        <motion.h1
          variants={animate}
          initial="initial"
          animate="final"
          className="font-serif text-5xl font-bold tracking-tighter text-gray-800 dark:text-gray-200"
        >
          All Projects
        </motion.h1>
        <motion.table
          variants={animate}
          initial="initial"
          animate="final"
          className="mt-12 w-full text-left font-serif dark:text-gray-300"
        >
          <thead className="sticky top-0 z-10 border-b bg-gray-100 px-6 py-5 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200">
            <tr>
              <th className="py-4 pr-8 text-sm font-semibold">Year</th>
              <th className="py-4 pr-8 text-sm font-semibold">Project</th>

              <th className="hidden py-4 pr-8 text-sm font-semibold lg:table-cell">
                Built with
              </th>
              <th className="hidden py-4 pr-8 text-sm font-semibold sm:table-cell">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <TableRows key={project.link} project={project} />
            ))}
          </tbody>
        </motion.table>
      </div>
    </article>
  );
}

function TableRows({ project }) {
  return (
    <tr className="border-b dark:border-gray-800 dark:text-gray-400">
      <td className="py-4 pr-4 align-top text-sm">
        <div>{project.year}</div>
      </td>
      <td className="py-4 pr-4 align-top font-semibold leading-snug">
        <div className="block sm:hidden">
          <a
            className="hover: group/link inline-flex items-baseline text-base font-medium leading-tight hover:text-green-500  focus-visible:text-green-500 sm:hidden"
            href={project.link}
            target="_blank"
            aria-label={`Go to github page of ${project.name}`}
          >
            <span>
              <span className="inline-block">
                {project.name}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
        <div className="hidden sm:block">{project.name}</div>
        <div className="block pt-4 lg:hidden">
          <ul className="flex -translate-y-1.5 flex-wrap">
            {project.stack.map((tech, i) => (
              <li key={tech} className="my-1 mr-1.5">
                <div className="flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium leading-5 text-green-600">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </td>

      <td className="hidden py-4 pr-4 align-top lg:table-cell">
        <ul className="flex -translate-y-1.5 flex-wrap">
          {project.stack.map((tech, i) => (
            <li key={tech} className="my-1 mr-1.5">
              <div className="flex items-center rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium leading-5 text-green-600">
                {tech}
              </div>
            </li>
          ))}
        </ul>
      </td>
      <td className="hidden py-4 align-top sm:table-cell">
        <ul>
          <li className="mb-1 flex items-center">
            <a
              className="hover: group/link inline-flex items-baseline text-sm  font-medium leading-tight text-slate-400 hover:text-green-500  focus-visible:text-green-500"
              href={project.link}
              target="_blank"
              aria-label={`Go to github page of ${project.name}`}
            >
              <span>
                <span className="inline-block">
                  github
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </a>
          </li>
        </ul>
      </td>
    </tr>
  );
}

export async function getStaticProps() {
  const projects = await getLatestProjects();

  return { props: { projects }, revalidate: 30 };
}

export default ProjectsPage;
