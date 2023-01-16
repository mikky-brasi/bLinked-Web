import "bootstrap/dist/css/bootstrap.min.css";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import "@/styles/index.scss";
import "@/styles/globals.scss";

// Auth SCSS Start
import "../components/Footer.scss";
import "@/styles/_input_box.scss";
import "@/styles/pages/SignIn.scss";
import "@/styles/pages/SignUp.scss";
import "@/styles/pages/Forgot.scss";

// Dashboard SCSS Start
import "../components/Dashboard.scss";
import "@/styles/pages/Home.scss";
import "@/styles/pages/Settings.scss";
import "@/styles/pages/Orders.scss";
import "@/styles/pages/Agents.scss";
import "@/styles/pages/Feedback.scss";
import "@/styles/pages/Landing.scss";

import "../components/NotificationDropdown.scss";
import "../components/Toast.scss";
import "../components/LoadingState.scss";

import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalProvider } from "../context/GlobalState";
import AlertToast from "../components/Toast";
import LoadingState from "../components/LoadingState";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Head>
        <title>bLinked</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <AlertToast />
      <LoadingState />
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
