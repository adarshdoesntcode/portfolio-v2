import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const anim = {
  initial: { scale: 0, y: "-50%", x: "-50%" },
  enter: { scale: 1, y: "-50%", x: "-50%" },
  exit: { scale: 0, y: "-50%", x: "-50%", transition: { duration: 0 } },
};

function SketchModal({ active }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function movement({ pageX, pageY }) {
      if (!modalRef.current) {
        return;
      }
      modalRef.current.style.top = `${pageY}px`;
      modalRef.current.style.left = `${pageX}px`;
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
      className="pointer-events-none fixed w-[400px]  border bg-gradient-to-br from-gray-100 to-white p-6 shadow-xl dark:border-gray-800   dark:from-gray-900 dark:to-black"
    ></motion.div>
  );
}

export default SketchModal;
