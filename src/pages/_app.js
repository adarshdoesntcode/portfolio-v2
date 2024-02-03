import "@/styles/globals.css";

import localFont from "next/font/local";

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
  return (
    <main
      className={`${reenie.variable} ${tanker.variable} ${satoshi.variable}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
