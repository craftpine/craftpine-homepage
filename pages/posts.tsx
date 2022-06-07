import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { Client } from "@notionhq/client";
import Section from "../components/Sections";

// Initializing a client

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default function Post({ data }: { data: any }) {
  console.log(data);

  const { results } = data;
  console.log(results)

  const bg = useColorModeValue("whiteAlpha.500", "whiteAlpha.200")

  return (
    <Box mt={6}>
      <motion.div
        style={{ display: "inline-block" }}
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {results.slice(1)?.map((e: any, i:number) => (
          <Section delay={"" + (0.1 + i/10) } key={e.id}>
            <Box
              borderRadius={"lg"}
              bg={bg}
              p={3}
              mb={6}
              textAlign="center"
              css={{ backdropFilter: "blur(10px)" }}
              userSelect="none"
            >
              {e.child_page.title}
            </Box>
          </Section>
        ))}
      </motion.div>
    </Box>
  );
}

export async function getStaticProps() {
  const pageId = "67811c8435a34c8db9f092e6ef64850b";
  const response = await notion.blocks.children.list({ block_id: pageId });

  return {
    props: { data: response }, // will be passed to the page component as props
  };
}
