"use client";
import { FC, ReactNode } from "react";
import { Container } from "../General/style";

const Production: FC<{ children: ReactNode }> = ({ children }) => {
  return <Container>{children}</Container>;
};
export default Production;
