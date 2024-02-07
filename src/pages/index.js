import { getPlayerState } from "@/pages/api/spotify";
import { getCurrentlyReading } from "@/pages/api/notion";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";

export default function Home({ track, book, theme, setTheme }) {
  return (
    <>
      <Header track={track} />
      <Hero theme={theme} setTheme={setTheme} book={book} />
      <Projects />
      <Blogs />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const track = await getPlayerState();
  const book = await getCurrentlyReading();

  return { props: { track, book }, revalidate: 30 };
}
