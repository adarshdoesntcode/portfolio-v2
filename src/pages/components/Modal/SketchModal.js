import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const anim = {
  initial: { scale: 0, y: "-50%", x: "-50%" },
  enter: { scale: 1, y: "-50%", x: "-50%" },
  exit: { scale: 0, y: "-50%", x: "-50%", transition: { duration: 0 } },
};

function SketchModal({ sketch, active }) {
  const [isLoading, setIsLoading] = useState(true);
  const modalRef = useRef(null);
  if (!sketch) return <div></div>;

  useEffect(() => {
    function movement({ clientX, clientY }) {
      if (!modalRef.current) {
        return;
      }
      modalRef.current.style.top = `${clientY}px`;
      modalRef.current.style.left = `${clientX}px`;
    }
    window.addEventListener("mousemove", movement);
    return () => window.removeEventListener("mousemove", movement);
  }, []);

  function calculateNewSize(originalWidth, originalHeight, newWidth) {
    const aspectRatio = originalWidth / originalHeight;
    const newHeight = aspectRatio * newWidth;
    return { newWidth, newHeight };
  }

  const { newWidth, newHeight } = calculateNewSize(
    sketch.width,
    sketch.height,
    sketch.width > sketch.height ? 600 : 400,
  );

  return (
    <motion.div
      ref={modalRef}
      variants={anim}
      initial="initial"
      animate={active ? "enter" : "exit"}
      className="pointer-events-none fixed  border   bg-gradient-to-br from-gray-100 to-white p-6 shadow-xl dark:border-gray-800 dark:from-gray-900   dark:to-black "
    >
      {isLoading && (
        <div className="flex h-full items-center justify-center text-gray-800 dark:text-gray-200">
          Loading...
        </div>
      )}
      <Image
        src={sketch.Image}
        width={newWidth}
        height={newHeight}
        onLoad={() => setIsLoading(false)}
        alt="latest image of my sketch"
      />
    </motion.div>
  );
}

export default SketchModal;
