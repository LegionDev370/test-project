"use client";
import { FC, ReactNode } from "react";
import React, { useState } from "react";
import SimpleSlider from "../Slider/slider";
import { Container, Header, Wrapper } from "./style";
import { SliderWrapper } from "./style";
const HeaderMenu: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Container>
      <Header>
        {children}
        <Wrapper>
          <SliderWrapper>
            <SimpleSlider />
          </SliderWrapper>
        </Wrapper>
      </Header>
    </Container>
  );
};
export default HeaderMenu;
