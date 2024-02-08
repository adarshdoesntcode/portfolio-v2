import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const anim = {
  initial: { scale: 0, y: "-50%", x: "-50%" },
  enter: { scale: 1, y: "-50%", x: "-50%" },
  exit: { scale: 0, y: "-50%", x: "-50%", transition: { duration: 0 } },
};

function BookModal({ book, active }) {
  if (!book) return <div></div>;
  const modalRef = useRef(null);

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

  return (
    <motion.div
      ref={modalRef}
      variants={anim}
      initial="initial"
      animate={active ? "enter" : "exit"}
      className="pointer-events-none  fixed w-[400px] border  bg-gradient-to-br from-gray-100 to-white p-6 shadow-xl dark:border-gray-800 dark:from-gray-900   dark:to-black "
    >
      <div className="flex gap-6">
        <div className="relative h-full w-1/3">
          <Image
            src={book.coverUrl}
            width={380}
            height={450}
            alt="currently reading book cover photo"
          />
        </div>
        <div className=" flex  w-2/3  flex-col justify-between">
          <div>
            <div className="mb-2 w-full border-b pb-2  text-sm text-gray-400 dark:border-gray-800  dark:text-gray-500">
              Currently Reading
            </div>
            <div className="font-serif text-2xl font-bold text-gray-600 dark:text-gray-300 ">
              {book.bookTitle}
            </div>
            <div className="text-gray-400">by {book.bookAuthor}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">
              {book.currentPage} / {book.totalPages}
            </div>

            <progress
              className="progressBar"
              max={book.totalPages}
              value={book.currentPage}
            ></progress>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default BookModal;
