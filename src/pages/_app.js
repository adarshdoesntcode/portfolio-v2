import "@/styles/globals.css";
import localFont from "next/font/local";
import Head from "next/head";

import { useEffect, useState } from "react";

const reenie = localFont({
  src: "../styles/fonts/reenie.ttf",
  variable: "--font-cursive",
});

const tanker = localFont({
  src: "../styles/fonts/tanker.woff2",
  variable: "--font-tanker",
});
const satoshi = localFont({
  src: "../styles/fonts/satoshi.ttf",
  variable: "--font-serif",
});

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.className = localStorage.getItem("theme");
      setTheme(localStorage.getItem("theme"));
    }
  }, []);
  return (
    <main
      className={`${reenie.variable} ${tanker.variable} ${satoshi.variable} `}
    >
      <Head>
        <title>Adarsh Das - Developer</title>
        <link rel="shortcut icon" href="favicon.png" />
      </Head>
      <Component {...pageProps} theme={theme} setTheme={setTheme} />
    </main>
  );
}
