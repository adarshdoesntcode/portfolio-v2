import Reveal from "../Reveal/Reveal";

function Footer() {
  return (
    <>
      <div className="border-b dark:border-gray-800 dark:bg-black">
        <div className="mx-auto grid max-w-7xl grid-cols-12 px-4 xl:px-10">
          <div className="footer col-span-12 border-x p-8 font-serif dark:border-gray-800">
            <Reveal delay={0.3} duration={1}>
              <div className="mx-auto max-w-md py-8 text-center text-xs text-gray-400 dark:text-gray-600 sm:text-sm">
                Design inspired by weeks of exploring, Coded in VS Code, Built
                with Next.js and Tailwind CSS, Animated with Framer Motion,
                Deployed with Vercel, Typeface from FontShare and <br />
                Made by{" "}
                <span className="mt-4 text-gray-700 underline decoration-green-500 underline-offset-2 dark:text-gray-300">
                  <a href="mailto:adarsh.191605@ncit.edu.np">Adarsh Das</a>
                </span>{" "}
                &#169; 2024
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="dark:bg-black">
        <div className="mx-auto grid h-4 max-w-7xl grid-cols-12 px-4 xl:h-10 xl:px-10">
          <div className="sm:dot-matrix col-span-12 border-x dark:border-gray-800"></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
