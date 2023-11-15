"use client";
import { FC, ReactNode } from "react";
import { Footer } from "./style";
import { Container } from "../General/style";
const FooterContent: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Footer>
      <Container>{children}</Container>
    </Footer>
  );
};
export default FooterContent;
