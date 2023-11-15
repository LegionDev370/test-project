"use client";
import styled from "styled-components";
import image from "@/app/assets/images/background-hospital.png";

export const SliderWrapper = styled.div`
  margin-top: 70px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Header = styled.header`
  width: 100%;
  background: #f3f3f3;
  background: url(${image.src}), lightgray 50% / cover no-repeat;
  padding-bottom: 93px;
`;
