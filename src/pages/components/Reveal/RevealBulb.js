import { useEffect, useRef } from "react";
import { motion, useInView, useAnimationControls } from "framer-motion";

function RevealBulb({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      mainControls.start("enter");
    }
  }, [isInView]);

  const slide = {
    initial: { opacity: 0, y: -20 },
    enter: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.6 },
    },
  };
  return (
    <motion.div
      ref={ref}
      variants={slide}
      initial="initial"
      animate={mainControls}
      className="relative flex flex-col gap-5"
    >
      {children}
    </motion.div>
  );
}

export default RevealBulb;
