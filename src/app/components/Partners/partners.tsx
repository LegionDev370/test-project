import { FC, ReactNode } from "react";
import { Section, Title } from "./style";
import { Flex } from "./style";
import { Container } from "../General/style";

const Partners: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Section>
      <Container>
        <Title>ПАРТНЕРЫ</Title>
        <Flex>{children}</Flex>
      </Container>
    </Section>
  );
};
export default Partners;
