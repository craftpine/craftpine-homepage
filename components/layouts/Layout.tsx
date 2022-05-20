import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import theme from "../../libs/theme";
import Fonts from "../Fonts";
import Footer from "./Footer";
import Navbar from "../NavBar";
import { AnimatePresence } from "framer-motion";
import { Router } from "next/router";
import Head from "next/head";
import dynamic from "next/dynamic";

type LayoutProps = {
  children: React.ReactElement;
  router: Router;
};

function Layout({ children, router }: LayoutProps) {
  return (
    <Box as="main" pb={8}>
      <Head>
        <title>HoangDai - Homepage</title>
        <meta name="viewport" content="width=device-with, initial-scale=1" />
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="/40_406071_cute_pineapple_drawing_Lbq_icon.ico"
        />
      </Head>

      <ChakraProvider theme={theme}>
        <Fonts />
        <Navbar path={router.asPath} />

        <Container maxW="container.md" pt={14}>
          <AnimatePresence
            exitBeforeEnter
            initial={true}
            onExitComplete={() => {
              if (typeof window !== "undefined") {
                window.scrollTo({ top: 0 });
              }
            }}
          >
            {children}
            <Footer />
          </AnimatePresence>
        </Container>
      </ChakraProvider>
    </Box>
  );
}

export default Layout;