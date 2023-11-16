import { FC, ReactNode } from "react";
import styled from "styled-components";

export const Container: FC<{
  height: any;
  onClick: any;
  children: ReactNode;
}> = styled.button`
  max-width: 270px;
  height: ${({ height }) => (height ? `${height}px` : "70px")};
  width: 100%;
  display: block;
  border-radius: 35px;
  opacity: 0.9;
  background: linear-gradient(90deg, #0d4c93 0%, #00c9c9 100%);
  color: #fff;
  border: none;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  &:hover {
    background: linear-gradient(90deg, #00c9c9 0%, #0d4c93 100%);
  }
`;
