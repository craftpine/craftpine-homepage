import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Layout";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout router={router}>
        <Component {...pageProps} key={router.route} />
    </Layout>
  );
}

export default MyApp;
