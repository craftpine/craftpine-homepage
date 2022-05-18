import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { GiPineapple } from "react-icons/gi";
const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <GiPineapple />

          <Text
            color={useColorModeValue("gray.800", "whiteAlpha.900")}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
          >
            Hoang Dai
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
