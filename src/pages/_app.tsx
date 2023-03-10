// Libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// Common
import "@/styles/index.scss";

import type { AppProps } from "next/app";
import Head from "next/head";
import { withMaybeGoogleOAuthProvider } from "../modules/google-oauth/withMaybeGoogleOAuthProvider";
import { GlobalProvider } from "../context/GlobalState";
import AlertToast from "../components/Toast";
import LoadingState from "../components/LoadingState";

export function App({ Component, pageProps }: AppProps) {
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

export default withMaybeGoogleOAuthProvider(App);
