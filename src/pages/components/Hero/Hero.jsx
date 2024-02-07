import AuthorPolaroid from "./AuthorPolaroid";
import BannerText from "./BannerText";

function Hero({ book, theme, setTheme, sketch }) {
  return (
    <main className="border-b dark:border-gray-800 dark:bg-black">
      <div className="mx-auto grid max-w-7xl  grid-cols-12 px-4 xl:px-10">
        <BannerText
          theme={theme}
          setTheme={setTheme}
          book={book}
          sketch={sketch}
        />
        <AuthorPolaroid />
      </div>
    </main>
  );
}

export default Hero;
