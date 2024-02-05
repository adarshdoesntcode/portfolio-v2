import Image from "next/image";
import polaroid from "@/styles/assets/sticker.png";
import polaroid2 from "@/styles/assets/sticker2.png";
import { useEffect, useRef, useState } from "react";

function AuthorPolaroid() {
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 460;
    canvas.height = 532;
    console.log(window.innerWidth);
    canvas.style.width = "460px";
    canvas.style.height = "532px";
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
    <div className="order-1 col-span-12 border-r dark:border-gray-800 md:order-2 md:col-span-5 ">
      <div className="polaroid relative mx-auto select-none bg-white p-5 dark:bg-gray-200">
        {hasDrawn ? (
          <Image
            className="bg-gray-100 pt-5 dark:bg-gray-900"
            src={polaroid2}
            alt="authors avatar image"
          />
        ) : (
          <Image
            className="bg-gray-100 pt-5  dark:bg-gray-900"
            src={polaroid}
            alt="authors avatar image"
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
          onMouseMove={draw}
          className="absolute inset-0 z-10 hidden h-full  w-full cursor-draw min-[1139px]:block"
          ref={canvasRef}
        ></canvas>
      </div>
    </div>
  );
}

export default AuthorPolaroid;
