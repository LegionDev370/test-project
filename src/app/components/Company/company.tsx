import { FC, ReactNode } from "react";
import { Title } from "../Production/Cards/style";
import { Flex, Section } from "./style";
import { Wrapper } from "../Header/style";
const Company: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Section>
      <Title>О КОМПАНИИ</Title>
      <Flex>
        <Wrapper>{children}</Wrapper>
      </Flex>
    </Section>
  );
};
export default Company;
