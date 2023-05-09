import { motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { ComponentPropsWithoutRef } from "react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

type SectionProps = {
  delay: string;
} & ComponentPropsWithoutRef<"div">;

const Section = ({ children, delay = "0" }: SectionProps) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 10, opacity: 0 }}
    transition={{ duration: "0.2", delay }}
    mb={6}
  >
    {children}
  </StyledDiv>
);

export default Section;
