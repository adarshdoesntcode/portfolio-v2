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
    <div className="col-span-12 border-r order-1 md:order-2 md:col-span-5 ">
      <div className="p-5 bg-white mx-auto polaroid relative">
        {hasDrawn ? (
          <Image
            className="pt-5 bg-gray-100"
            src={polaroid2}
            alt="authors avatar image"
          />
        ) : (
          <Image
            className="pt-5 bg-gray-100"
            src={polaroid}
            alt="authors avatar image"
          />
        )}

        <div className="polaroid-text hidden min-[1139px]:block bg-white p-5 text-center font-cursive text-2xl pb-0">
          {hasDrawn ? "Picasso great 👍🏼 " : "plz don't scribble on it !!"}
        </div>
        <div className="polaroid-text min-[1139px]:hidden bg-white p-5 text-center font-cursive text-2xl pb-0">
          hello there!!
        </div>
        <canvas
          onMouseDown={startDrawig}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
          className="absolute hidden min-[1139px]:block inset-0 cursor-draw  z-10 w-full h-full"
          ref={canvasRef}
        ></canvas>
      </div>
    </div>
  );
}

export default AuthorPolaroid;
