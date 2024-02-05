import { easeIn, easeInOut, motion } from "framer-motion";

function Loader() {
  const slide = {
    initial: { opacity: 1, top: 0 },
    exit: {
      opacity: 1,
      top: "-100vh",
      transition: { duration: 1.3, ease: [0.83, 0, 0.17, 1] },
    },
  };

  const text = {
    initial: { opacity: 0, y: 40 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      variants={slide}
      initial="initial"
      exit="exit"
      className="fixed z-50 flex h-svh  w-svw flex-col items-center justify-center bg-gray-100 text-center"
    >
      <motion.h1
        variants={text}
        initial="initial"
        animate="enter"
        exit="exit"
        className="font-serif text-4xl font-extrabold uppercase leading-10 tracking-tighter text-gray-600 sm:text-5xl"
      >
        Adarsh Das
      </motion.h1>
      <motion.h2
        variants={text}
        initial="initial"
        animate="enter"
        exit="exit"
        className="font-serif text-xl uppercase leading-10 tracking-tight  text-gray-400 sm:text-2xl"
      >
        © Folio 2024
      </motion.h2>
    </motion.div>
  );
}

export default Loader;
