import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import Section from "../../components/Sections";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { getBlockList, getPage } from "../../libs";

function renderContent(data: any) {
  let element = null;

  switch (data.type) {
    case "image":
      const { captions, file } = data.image;
      element = (
        <Box>
          <Image src={file.url} alt={captions && captions[0].text.content} />
        </Box>
      );

      break;

    case "paragraph":
      const { rich_text } = data.paragraph;

      element = rich_text.map((e: any, i: number) => (
        <Text key={i} display="inline">
          {e.text.content}
        </Text>
      ));
      break;

    default:
      break;
  }

  return <div key={data.id}>{element}</div>;
}

export default function PostDetail({ page, block }: any) {
  return (
    <motion.div
      key={useColorModeValue("light", "dark")}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Box py={12}>
        <Heading mb={4}>{page.properties.title.title[0].text.content}</Heading>

        {block.results.map((e: any, i: number) => (
          <Section delay={"" + (0.1 + i / 10)} key={e.id}>
            {renderContent(e)}
          </Section>
        ))}

        <Box display="flex" justifyContent="center">
          <Link href="/posts">
            <Button leftIcon={<ChevronLeftIcon />} colorScheme="teal">
              Go Back
            </Button>
          </Link>
        </Box>
      </Box>
    </motion.div>
  );
}

export async function getStaticPaths() {
  const blockId = process.env.NOTION_BLOG_ID ?? "";
  const response = await getBlockList(blockId)

  return {
    paths: response.results.map((e:any) => ({
      params: {
        id: e.id,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { id } = params;

  const page = await getPage(id)

  const block = await getBlockList(id)

  return {
    props: { page, block },
  };
}
