"use client";

import { FC, ReactNode } from "react";
import { Wrapper } from "./style";
const General: FC<{ children: ReactNode }> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
export default General;
