import Spacer from "./Spacer";
import Spotify from "./Spotify";
import Title from "./Title";
function Header() {
  return (
    <>
      <Spacer />
      <header className="border-b dark:border-gray-800  dark:bg-black">
        <div className="mx-auto  grid max-w-7xl  grid-cols-12 px-4 xl:px-10">
          <Title />
          <div className="col-span-2 border-r dark:border-gray-800 md:col-span-3"></div>
          <div className="dot-matrix col-span-1 hidden border-r dark:border-gray-800 md:block lg:col-span-2"></div>
          <Spotify />
        </div>
      </header>
    </>
  );
}

export default Header;
