"use client";

import { FC, ReactNode } from "react";
import { Container } from "./style";
const General: FC<{ children: ReactNode }> = ({ children }) => {
  return <Container>{children}</Container>;
};
export default General;
