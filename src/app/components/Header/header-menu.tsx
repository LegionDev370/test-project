"use client";
import { FC, ReactNode } from "react";
import SimpleSlider from "../Slider/slider";
import { Header } from "./style";
import { Container } from "../General/style";
import { SliderWrapper } from "./style";
const HeaderMenu: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Header>
      <Container>
        {children}
        <SliderWrapper>
          <SimpleSlider />
        </SliderWrapper>
      </Container>
    </Header>
  );
};
export default HeaderMenu;
