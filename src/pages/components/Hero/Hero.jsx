import AuthorPolaroid from "./AuthorPolaroid";
import BannerText from "./BannerText";

function Hero({ theme, setTheme }) {
  return (
    <main className="border-b dark:border-gray-800 dark:bg-black">
      <div className="mx-auto grid max-w-7xl  grid-cols-12 px-4 xl:px-10">
        <BannerText theme={theme} setTheme={setTheme} />
        <AuthorPolaroid />
      </div>
    </main>
  );
}

export default Hero;
