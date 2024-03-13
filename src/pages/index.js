import { getCurrentlyReading, getLatestSketch } from "@/pages/api/notion";
import { getActivities } from "./api/strava";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";

export default function Home({ sketch, book, stravaData, theme, setTheme }) {
  return (
    <>
      <Header />
      <Hero
        theme={theme}
        setTheme={setTheme}
        book={book}
        sketch={sketch}
        stravaData={stravaData}
      />
      <Projects />
      <Blogs />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const book = await getCurrentlyReading();
  const sketch = await getLatestSketch();
  const stravaData = await getActivities();

  return { props: { book, sketch, stravaData }, revalidate: 30 };
}
