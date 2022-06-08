import { Box, Divider, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { Client } from "@notionhq/client";
import Section from "../components/Sections";
import dayjs from "dayjs";
import Link from "next/link";

export const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export default function Post({ data }: { data: any }) {
  const { results } = data;

  // console.log(results)

  const bg = useColorModeValue("whiteAlpha.500", "whiteAlpha.200");
  const motionKey = useColorModeValue("light", "dark");

  return (
    <Box mt={"100px"}>
      <motion.div
        key={motionKey}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {results?.map((e: any, i: number) => (
          <Section delay={"" + (0.1 + i / 10)} key={e.id}>
            <Box
              borderRadius={"lg"}
              bg={bg}
              p={3}
              mb={6}
              css={{ backdropFilter: "blur(10px)" }}
              userSelect="none"
            >
              <Link href={`/posts/${e.id}`}>
                <a
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Box>{e?.child_page?.title}</Box>
                  <Box>{dayjs(e.created_time).format("MMM DD YYYY")}</Box>
                </a>
              </Link>
            </Box>
            <Divider />
          </Section>
        ))}
      </motion.div>
    </Box>
  );
}

export async function getStaticProps() {
  const pageId = process.env.NOTION_BLOG_ID ?? "";
  const response = await notion.blocks.children.list({
    block_id: pageId,
    // page_size:2
  });


  return {
    props: { data: response }, // will be passed to the page component as props
  };
}
