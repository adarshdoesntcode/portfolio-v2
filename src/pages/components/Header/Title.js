function Title() {
  return (
    <div className="col-span-10 md:col-span-3 border-x px-4 sm:px-8 py-5">
      <div className="w-fit relative">
        <h1 className="text-5xl md:text-8xl text-gray-800 font-tanker tracking-wide sm:tracking-wider font-bold leading-none">
          adarsh.
        </h1>
        <div
          className="absolute translate-x-full -translate-y-1/4 md:-translate-y-0 inline-block right-0 top-0 rounded-full bg-green-500 px-4 py-3 text-xs md:text-sm font-bold leading-none text-white"
          style={{ opacity: "1" }}
        >
          <span className="inline-block">Good afternoon!</span>
          <svg
            viewBox="0 0 22 18"
            fill="none"
            className="absolute -bottom-[9px] left-[7px] w-5 text-green-500"
          >
            <path
              d="M20.9991 8C17.4991 12.5 13.4991 16 7.69476 17.4776C8.49908 10.5 6.99908 8 0.939453 3.39334L1.79694 0L21.1874 4.8999L20.9991 8Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Title;
