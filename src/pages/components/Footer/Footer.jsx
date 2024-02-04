function Footer() {
  return (
    <>
      <div className="border-b">
        <div className="mx-auto grid grid-cols-12 max-w-7xl px-4 xl:px-10">
          <div className="col-span-12 p-8 border-x font-serif footer">
            <div className="max-w-md text-gray-400 text-xs py-8 sm:text-sm text-center mx-auto">
              Design inspired by weeks of exploring, Coded in VS Code, Built
              with Next.js and Tailwind CSS, Animated with Framer Motion,
              Deployed with Vercel, Typeface from FontShare and <br />
              Made by{" "}
              <span className="underline text-gray-700 underline-offset-2 decoration-green-500 mt-4">
                Adarsh Das
              </span>{" "}
              &#169; 2024
            </div>
          </div>
        </div>
      </div>
      <div className="border-b">
        <div className="mx-auto grid max-w-7xl grid-cols-12 h-4 px-4 xl:h-10 xl:px-10">
          <div className="col-span-12 border-x sm:dot-matrix"></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
