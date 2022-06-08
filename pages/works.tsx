import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

export default function Works({ isVisible }: any) {
  return (
    <motion.div
      key={useColorModeValue("light", "dark")}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Box textAlign="center" width="100%">This page is being under development</Box>
    </motion.div>
  );
}
