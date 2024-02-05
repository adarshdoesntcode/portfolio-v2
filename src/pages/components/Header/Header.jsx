import Spacer from "./Spacer";
import Spotify from "./Spotify";
import Title from "./Title";
function Header({ track }) {
  return (
    <>
      <Spacer />
      <header className="border-b dark:border-gray-800  dark:bg-black">
        <div className="mx-auto  grid grid-cols-12  max-w-7xl px-4 xl:px-10">
          <Title />
          <div className="col-span-2 border-r dark:border-gray-800 md:col-span-3"></div>
          <div className="dot-matrix col-span-1 lg:col-span-2 hidden border-r dark:border-gray-800 md:block"></div>
          <Spotify track={track} />
        </div>
      </header>
    </>
  );
}

export default Header;
