import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.scss";

// Dashboard SCSS Start
import "@/styles/LandingPage.scss";

import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>bLinked</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
