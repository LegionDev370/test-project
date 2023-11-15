"use client";
import { FC, ReactNode } from "react";
import React, { useState } from "react";
import SimpleSlider from "../Slider/slider";
import { Header } from "./style";
import { Container } from "../General/style";
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
