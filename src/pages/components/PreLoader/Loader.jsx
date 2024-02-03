import { easeIn, easeInOut, motion } from "framer-motion";

function Loader() {
  const slide = {
    initial: { opacity: 1, top: 0 },
    exit: {
      opacity: 1,
      top: "-100vh",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const text = {
    initial: { opacity: 0, y: 40 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <motion.div
      variants={slide}
      initial="initial"
      exit="exit"
      className="fixed flex flex-col items-center  justify-center h-svh w-svw bg-gray-200 z-50 text-center"
    >
      <motion.h1
        variants={text}
        initial="initial"
        animate="enter"
        className="font-serif tracking-tighter leading-10 uppercase text-5xl font-extrabold text-gray-500"
      >
        Adarsh Das
      </motion.h1>
      <motion.h2
        variants={text}
        initial="initial"
        animate="enter"
        className="font-serif tracking-tight leading-10 uppercase text-2xl text-gray-400"
      >
        © Folio 2024
      </motion.h2>
    </motion.div>
  );
}

export default Loader;
