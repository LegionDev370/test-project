import { FC, ReactNode } from "react";
import { Background, Section } from "./style";
import { Title } from "../Production/Cards/style";
import { Wrapper } from "../Header/style";
const Service: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Section>
      <Title>УСЛУГИ</Title>
      <Background>
        <Wrapper>{children}</Wrapper>
      </Background>
    </Section>
  );
};
export default Service;
