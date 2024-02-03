import AuthorPolaroid from "./AuthorPolaroid";
import BannerText from "./BannerText";

function Hero() {
  return (
    <main className="border-b">
      <div className="mx-auto grid grid-cols-12 max-w-7xl px-4 xl:px-10">
        <BannerText />
        <AuthorPolaroid />
      </div>
    </main>
  );
}

export default Hero;
