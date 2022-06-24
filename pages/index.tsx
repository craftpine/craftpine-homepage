import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Paragraph from "../components/Paragraph";
import Section from "../components/Sections";
import NextLink from "next/link";
import { BioSection, BioYear } from "../components/Bio";
import {motion} from 'framer-motion'

const Home: NextPage = () => {
  return (
    <Container p={4} maxW="container.sm">
      <Section delay="0.1">
        <Box
          borderRadius={"lg"}
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          textAlign="center"
          css={{ backdropFilter: "blur(10px)" }}
          userSelect="none"
        >
          Hello, I&apos;m a full-stack developer based in VietNam!
        </Box>
      </Section>

      <Section delay="0.2">
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as={"h2"} mb={4} variant="page-title" userSelect="none">
              Hoang Dai
            </Heading>
            <Text>Making weird things with web technologies.</Text>
            <Text fontSize="14px" fontStyle={"italic"}>
              (Developer / Freehand drawing)
            </Text>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              alt="Profile Image"
              src="/images/Image.png"
            />
          </Box>
        </Box>
      </Section>

      {/* section1 */}
      <Section delay={"0.3"}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          HoangDai is a {new Date().getFullYear() - 1995}-year-old Vietnamese
          Freelance Front-end developer. I like to resolve design problems,
          create smart user interface and imagine useful interaction, developing
          rich web experiences & web applications. When not working or futzing
          around with code, I study how to escape from University. Actually for
          hire.
        </Paragraph>
        <Box justifyContent="center" display="flex" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
                borderRadius="50px"
              >
                My portfolio
              </Button>
            </motion.div>
          </NextLink>
        </Box>
      </Section>

      {/* bio */}
      <Section delay={"0.4"}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1995</BioYear>
          Born in HaiPhong, VietNam
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Worked at JamJa as Intern web developer
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Worked at VietSoftware International as Fullstack developer
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed the Bachelor&apos;s degree of Information Technology at
          Hanoi University of Science and Technology
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked at BUNBU COMPANY LIMITED as Fullstack developer
        </BioSection>
        <BioSection>
          <BioYear>2019 to present</BioYear>
          Works as a freelance
        </BioSection>
      </Section>

      {/* love */}
      <Section delay={"0.5"}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art,{" "}
          <Link
            href="https://www.pinterest.com/hoangdai/my-drawings/"
            target="_blank"
          >
            Drawing
          </Link>
          , Coding, Gaming
        </Paragraph>
      </Section>
    </Container>
  );
};

export default Home;
