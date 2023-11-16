import styled from "styled-components";
import { FC, ReactNode, RefObject } from "react";
export const Wrapper: FC<{
  display: any;
  children: ReactNode;
  ref: RefObject<HTMLDivElement>;
}> = styled.div`
  width: 100%;
  position: relative;
  overflow-x: hidden;
  &::before {
    content: "";
    display: ${({ display }) => (display ? display : "none")};
    position: absolute;
    z-index: 200;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  overflow-y: ${({ display }) => (display ? "hidden" : "inherit")};
`;
export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;
