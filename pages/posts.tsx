import { useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

export default function Post() {
  return (
    <motion.div
      style={{ display: "inline-block" }}
      key={useColorModeValue("light", "dark")}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      Posts
    </motion.div>
  );
}
