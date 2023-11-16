"use client";

import { FC, ReactNode, useRef } from "react";
import { Wrapper } from "./style";
import { useMyContext } from "../context/context";
const General: FC<{ children: ReactNode }> = ({ children }) => {
  const { state, dispatch } = useMyContext();
  const scrollTop = state.modal.scrollTop;
  const WrapperRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (scrollTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(function () {
        document.documentElement.style.overflow = "hidden";
      }, 1000);
    }
  };
  handleScroll();
  return (
    <Wrapper ref={WrapperRef} display={state.modal.display}>
      {children}
    </Wrapper>
  );
};
export default General;
