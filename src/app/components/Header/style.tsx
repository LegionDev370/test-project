"use client";
import styled from "styled-components";
import image from "@/app/assets/images/background-hospital.png";

export const SliderWrapper = styled.div`
  margin-top: 70px;
  padding-left: 15px;
  padding-right: 15px;
`;
export const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
`;
export const Header = styled.header`
  background: #f3f3f3;
  background: url(${image.src}), lightgray 50% / cover no-repeat;
  padding-bottom: 93px;
`;
export const Container = styled.div``;
