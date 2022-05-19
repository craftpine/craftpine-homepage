import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box textAlign="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} HoangDai All Rights Reserved.
      <Text as="div" fontSize="12px">
        (inspired by Takuya Matsuyama)
      </Text>
    </Box>
  );
};

export default Footer;
