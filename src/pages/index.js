import { getPlayerState } from "@/pages/api/spotify";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";

export default function Home({ track }) {
  return (
    <>
      <Header track={track} />
      <Hero />
      <Projects />
      <Blogs />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const track = await getPlayerState();
  return { props: { track }, revalidate: 1 };
}
