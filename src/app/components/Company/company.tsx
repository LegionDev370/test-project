import { FC, ReactNode } from "react";
import { Title } from "../Production/Cards/style";
import { Flex, Section } from "./style";
import { Container } from "../General/style";
const Company: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Section>
      <Container>
        <Title>О КОМПАНИИ</Title>
        <Flex>{children}</Flex>
      </Container>
    </Section>
  );
};
export default Company;
