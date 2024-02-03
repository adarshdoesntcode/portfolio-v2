import { getPlayerState } from "@/pages/api/spotify";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import { useEffect, useState } from "react";
import Loader from "./components/PreLoader/Loader";
import { AnimatePresence } from "framer-motion";

export default function Home({ track }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1800);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
      <Header track={track} />
      <Hero />
      <Projects />
    </>
  );
}

export async function getStaticProps() {
  const track = await getPlayerState();
  return { props: { track }, revalidate: 1 };
}
