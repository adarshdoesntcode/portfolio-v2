import { getPlayerState } from "@/pages/api/spotify";
import { getCurrentlyReading, getLatestSketch } from "@/pages/api/notion";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";

export default function Home({ track, sketch, book, theme, setTheme }) {
  return (
    <>
      <Header track={track} />
      <Hero theme={theme} setTheme={setTheme} book={book} sketch={sketch} />
      <Projects />
      <Blogs />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const track = await getPlayerState();
  const book = await getCurrentlyReading();
  const sketch = await getLatestSketch();

  return { props: { track, book, sketch }, revalidate: 30 };
}
