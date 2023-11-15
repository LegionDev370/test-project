import { FC, ReactNode } from "react";
import { Wrapper } from "../Header/style";
import { Section, Title } from "./style";
import { Flex } from "./style";

const Partners: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Section>
      <Title>ПАРТНЕРЫ</Title>
      <Wrapper>
        <Flex>{children}</Flex>
      </Wrapper>
    </Section>
  );
};
export default Partners;
