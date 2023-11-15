import styled from "styled-components";
import image from "@/app/assets/images/abstract-blur.png";
export const Section = styled.section``;
export const Title = styled.h2`
  color: #0d4c93;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const Background = styled.div`
  padding-top: 64px;
  padding-bottom: 112px;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 64px;
  background-repeat: no-repeat;
  background: linear-gradient(180deg, #fafafa 0%, rgba(250, 250, 250, 0) 100%);
  background: url(${image.src}), lightgray 50% / cover no-repeat;
`;
