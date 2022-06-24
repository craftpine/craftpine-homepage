import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layouts/Layout";
import { useEffect, useState } from "react";
import Loading from "../components/layouts/Loading";
import ParallaxLayout from "../components/layouts/Parallax";
import './parallax.css'

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

function MyApp({ Component, pageProps, router }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  });

  return (
      <Layout router={router}>
        <>
        <ParallaxLayout />

          <Loading loading={loading} />
          <Component {...pageProps} key={router.route} />
        </>
      </Layout>
  );
}

export default MyApp;
