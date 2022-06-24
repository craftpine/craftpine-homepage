import {
  Box,
  Button,
  Grid,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Section from "../components/Sections";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import img from "../public/images/icons8-pineapple-60.png";

export default function Works({ isVisible }: any) {
  const certUrl =
    "https://www.coursera.org/account/accomplishments/specialization/certificate/";

  const certifications = [
    {
      id: "GJR85AQC9JXN",
      text: "Full-Stack Web Development with React Specialization",
    },
    {
      id: "M8C2G736NHLR",
      text: "Full-Stack Web Development with Angular Specialization",
    },
    {
      id: "8NEUC8FLXQNZ",
      text: "Introduction to MongoDB",
    },
    {
      id: "R5BS6YKHPW98",
      text: "Front-End JavaScript Frameworks: Angular",
    },
    {
      id: "D9CQ3K7AKDWK",
      text: "Front-End Web Development with React",
    },
    {
      id: "B3CZFJHJWS3B",
      text: "Python Basics",
    },
    {
      id: "ZFTDH4DKGR7D",
      text: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
    },
    {
      id: "VMFVJYXRRBZC",
      text: "Crash Course on Python",
    },
    {
      id: "QEJAANSYV4D4",
      text: "Server-side Development with NodeJS, Express and MongoDB",
    },
  ];

  const renderImgUrl = (id: string) =>
    `https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~${id}/CERTIFICATE_LANDING_PAGE~${id}.jpeg`;

  return (
    <motion.div
      key={useColorModeValue("light", "dark")}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Box textAlign="left" width="100%" mt={3}>
        <Text fontSize="xl" mb={3}>
          Works
        </Text>
      </Box>

      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        {certifications.map((e: any, i: number) => (
          <Section key={i} delay={"" + (0.1 + i / 10)}>
            <Link href={`${certUrl}${e.id}`} passHref>
              <a target="_blank">
                <Image
                  borderRadius={12}
                  src={renderImgUrl(e.id)}
                  // src="/images/icons8-pineapple-60.png"
                  alt={e.text}
                  loading="lazy"
                  fallbackSrc="/images/icons8-pineapple-60.png"
                  ignoreFallback={true}
                />
                <Text mt={2} fontSize={14}>
                  {e.text}
                </Text>
              </a>
            </Link>
          </Section>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" mb={8}>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link href="/">
            <Button
              leftIcon={<ChevronLeftIcon />}
              colorScheme="teal"
              borderRadius="50px"
            >
              Go Back
            </Button>
          </Link>
        </motion.div>
      </Box>
    </motion.div>
  );
}
