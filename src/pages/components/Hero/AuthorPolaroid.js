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
    canvas.width = 452;
    canvas.height = 524;
    canvas.style.width = "452px";
    canvas.style.height = "524px";
    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.strokeStyle = "#22c55e";
    context.lineWidth = 4;
    contextRef.current = context;
  }, []);

  const startDrawig = ({ nativeEvent }) => {
    setIsDrawing(true);
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
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

  function touchstart(event) {}
  function touchmove(event) {}
  function touchend(event) {}

  return (
    <div className="order-1 col-span-12 border-x border-b dark:border-gray-800 md:order-2 md:col-span-5 md:border-b-0 md:border-l-0 md:border-r ">
      <RevealImg>
        <Image
          className="bg-gray-100 pt-5 dark:bg-gray-900"
          src={hasDrawn ? polaroid2 : polaroid}
          alt="authors avatar image"
          placeholder="blur"
          priority={true}
        />

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
          onTouchStart={touchstart}
          onTouchEnd={touchend}
          onTouchMove={touchmove}
          className="absolute inset-0 z-10 hidden h-full  w-full cursor-draw min-[1139px]:block"
          ref={canvasRef}
        ></canvas>
      </RevealImg>
    </div>
  );
}

export default AuthorPolaroid;
