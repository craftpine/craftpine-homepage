import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../components/NavBar";
import theme from "../libs/theme";
import Fonts from "../components/Fonts";
import { AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
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
