import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
        <title>Adarsh Das | FullStack Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.png" />
        <meta property="og:image" content="meta.png" />
        <meta
          name="description"
          content="Full Stack Developer based on Kathmandu, Nepal. Fluent in ReactJS, NextJS and NodeJS"
        />
        <meta name="og:title" content="Adarsh Das | FullStack Developer" />
        <meta name="og:url" content="adasrshdas.com.np" />
        <meta
          name="og:description"
          content="Full Stack Developer based on Kathmandu, Nepal."
        />
        <meta name="author" content="Adarsh Das | FullStack Developer" />
        <meta name="twitter:card" content="summary_large" />
      </Head>
      <Component {...pageProps} theme={theme} setTheme={setTheme} />
      <SpeedInsights />
      <Analytics />
    </main>
  );
}
