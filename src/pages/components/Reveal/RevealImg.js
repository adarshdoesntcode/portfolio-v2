import { useEffect, useRef } from "react";
import { motion, useInView, useAnimationControls } from "framer-motion";

function RevealImg({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      mainControls.start("enter");
    }
  }, [isInView]);

  const slide = {
    initial: { opacity: 0, rotate: 3.2 },
    enter: {
      opacity: 1,
      rotate: 1.6,
      transition: { delay: 0.1, duration: 1, ease: [0.65, 0, 0.35, 1] },
    },
  };
  return (
    <motion.div
      ref={ref}
      variants={slide}
      initial="initial"
      animate={mainControls}
      className="polaroid relative mx-auto select-none bg-white p-4  dark:bg-gray-200 lg:p-5"
    >
      {children}
    </motion.div>
  );
}

export default RevealImg;
