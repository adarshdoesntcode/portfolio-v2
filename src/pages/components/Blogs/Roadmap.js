function Roadmap() {
  return (
    <div className="col-span-12 md:col-span-6 order-1 md:order-2 border-x border-b md:border-b-0 p-8 font-serif blog">
      <h2 className="font-semibold text-lg uppercase leading-none tracking-wide text-gray-800">
        <i className="fas fa-code text-green-500"></i>
        skill set roadmap.
      </h2>
      <p className="py-4 font-serif tracking-wide text-gray-500">
        A short personal history as it relates to design and development, and
        how I've found value in the cross-section between both disciplines.
      </p>
      <div className="flex mt-1 ml-auto w-fit items-center gap-2 rounded-lg">
        <div className="text-sm font-bold leading-none text-gray-800">
          Read More
        </div>
        <div className="flex p-2 items-center justify-center rounded-full  border-2 border-green-500">
          {/* <svg viewBox="0 0 8 8" fill="none" className="h-2 w-2 text-gray-800">
          <path
            d="M6.8291 6.82849L6.8291 1.17163M6.8291 1.17163L1.17225 1.17163M6.8291 1.17163L1.17188 6.82849"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg> */}
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
