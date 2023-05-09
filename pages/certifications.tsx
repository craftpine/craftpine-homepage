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
import Section from "../components/atoms/Sections";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import img from "../public/images/icons8-pineapple-60.png";

export default function Works({ isVisible }: any) {
  const renderUrl = (id: string, type: string) => {
    const obj: any = {
      udemy: `https://www.udemy.com/certificate/${id}`,
      coursera: `https://www.coursera.org/account/accomplishments/specialization/certificate/${id}`,
    };

    return obj[type];
  };

  const certifications = [
    {
      id: "GJR85AQC9JXN",
      text: "Full-Stack Web Development with React Specialization",
      type: "coursera",
    },
    {
      id: "M8C2G736NHLR",
      text: "Full-Stack Web Development with Angular Specialization",
      type: "coursera",
    },
    {
      id: "8NEUC8FLXQNZ",
      text: "Introduction to MongoDB",
      type: "coursera",
    },
    {
      id: "R5BS6YKHPW98",
      text: "Front-End JavaScript Frameworks: Angular",
      type: "coursera",
    },
    {
      id: "D9CQ3K7AKDWK",
      text: "Front-End Web Development with React",
      type: "coursera",
    },
    {
      id: "B3CZFJHJWS3B",
      text: "Python Basics",
      type: "coursera",
    },
    {
      id: "ZFTDH4DKGR7D",
      text: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
      type: "coursera",
    },
    {
      id: "VMFVJYXRRBZC",
      text: "Crash Course on Python",
      type: "coursera",
    },
    {
      id: "QEJAANSYV4D4",
      text: "Server-side Development with NodeJS, Express and MongoDB",
      type: "coursera",
    },
    {
      id: "UC-d68ac11d-bd39-48d5-9178-b6a50b88e7bb",
      text: "Node JS: Advanced Concepts",
      type: "udemy",
    },
    {
      id: "UC-66e5c9b0-8bb3-485d-b10d-070a0005c336",
      text: "JavaScript: The Advanced Concepts",
      type: "udemy",
    },
    {
      id: "UC-4e73d00c-6aa2-4502-a12d-b84ec83ed287",
      text: "Reactive Angular Course (with RxJs, Angular 15)",
      type: "udemy",
    },
  ];

  // UC-66e5c9b0-8bb3-485d-b10d-070a0005c336

  const renderImgUrl = (id: string, type: string) => {
    const objImgUrl: any = {
      coursera: `https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~${id}/CERTIFICATE_LANDING_PAGE~${id}.jpeg`,
      udemy: `https://udemy-certificate.s3.amazonaws.com/image/${id}.jpg?v=1680749591000`,
    };

    return objImgUrl[type];
  };

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
            <Link href={renderUrl(e.id, e.type)} passHref>
              <a target="_blank">
                <Image
                  borderRadius={12}
                  src={renderImgUrl(e.id, e.type)}
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
