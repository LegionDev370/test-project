import { FC, ReactNode } from "react";
import { Background, Section } from "./style";
import { Title } from "../Production/Cards/style";
import { Container } from "../General/style";

const Service: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Section>
      <Title>УСЛУГИ</Title>
      <Background>
        <Container>{children}</Container>
      </Background>
    </Section>
  );
};
export default Service;
