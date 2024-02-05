function Spacer() {
  return (
    <div className="border-b dark:border-gray-800 dark:bg-black">
      <div className="mx-auto grid max-w-7xl   grid-cols-12 h-4 px-4 xl:h-10 xl:px-10">
        <div className="col-span-10 border-x dark:border-gray-800 md:col-span-3"></div>
        <div className="col-span-2 border-r dark:border-gray-800 md:col-span-3"></div>
        <div className="col-span-1 lg:col-span-2 hidden border-r dark:border-gray-800  md:block"></div>
        <div className="col-span-6 hidden border-r dark:border-gray-800 md:block md:col-span-5 lg:col-span-4"></div>
      </div>
    </div>
  );
}

export default Spacer;
