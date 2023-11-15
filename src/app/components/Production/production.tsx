"use client";
import { FC, ReactNode } from "react";
import { Wrapper } from "../Header/style";
const Production: FC<{ children: ReactNode }> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
export default Production;
