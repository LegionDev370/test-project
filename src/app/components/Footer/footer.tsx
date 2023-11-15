"use client";
import { FC, ReactNode } from "react";
import { Footer } from "./style";
import { Wrapper } from "../Header/style";
const FooterContent: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Footer>
      <Wrapper>{children}</Wrapper>
    </Footer>
  );
};
export default FooterContent;
