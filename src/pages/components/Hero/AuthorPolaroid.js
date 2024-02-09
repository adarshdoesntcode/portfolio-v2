import Image from "next/image";
import polaroid from "@/styles/assets/sticker.png";
import polaroid2 from "@/styles/assets/sticker2.png";
import { useEffect, useRef, useState } from "react";

import RevealImg from "../Reveal/RevealImg";

function AuthorPolaroid() {
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 417;
    canvas.height = 489;
    canvas.style.width = "417px";
    canvas.style.height = "489px";
    const context = canvas.getContext("2d");

    context.lineCap = "round";
    context.strokeStyle = "#22c55e";
    context.lineWidth = 4;
    contextRef.current = context;
  }, []);

  const startDrawig = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    if (!isDrawing) return;
    setHasDrawn(true);
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  return (
    <div className="order-1 col-span-12 border-x border-b dark:border-gray-800 md:order-2 md:col-span-5 md:border-b-0 md:border-l-0 md:border-r ">
      <RevealImg>
        {hasDrawn ? (
          <Image
            className="bg-gray-100 pt-5 dark:bg-gray-900"
            src={polaroid2}
            alt="authors avatar image"
            priority={true}
          />
        ) : (
          <Image
            className="bg-gray-100 pt-5  dark:bg-gray-900"
            src={polaroid}
            alt="authors avatar image"
            priority={true}
          />
        )}

        <div className="polaroid-text hidden bg-white p-5  pb-0 text-center font-cursive text-2xl dark:bg-gray-200 min-[1139px]:block">
          {hasDrawn ? "Picasso great 👍🏼 " : "plz don't scribble on it !!"}
        </div>
        <div className="polaroid-text bg-white p-5  pb-0 text-center font-cursive text-2xl dark:bg-gray-200 min-[1139px]:hidden">
          hello there!!
        </div>
        <canvas
          onMouseDown={startDrawig}
          onMouseUp={finishDrawing}
          onMouseLeave={finishDrawing}
          onMouseMove={draw}
          className="absolute inset-0 z-10 hidden h-full  w-full cursor-draw min-[1139px]:block"
          ref={canvasRef}
        ></canvas>
      </RevealImg>
    </div>
  );
}

export default AuthorPolaroid;
