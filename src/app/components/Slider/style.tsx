import styled from "styled-components";
export const SliderItems = styled.div``;
import background from "@/app/assets/images/ellipse.png";
export const Flex = styled.div`
  display: flex;
`;
export const FlexLeft = styled.div`
  @media screen and (max-width: 600px) {
    padding-bottom: 25px;
  }
`;
export const FlexRight = styled.div`
  background-image: url(${background.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
export const Title = styled.h2`
  max-width: 380px;
  margin-bottom: 31px;
  color: #0d4c93;
  font-family: Roboto;
  font-size: 50px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 4.5px;
  @media screen and (max-width: 1150px) {
    font-size: 35px;
  }
`;
export const Description = styled.p`
  max-width: 680px;
  margin-bottom: 41px;
  color: #363535;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 40px; /* 166.667% */
  @media screen and (max-width: 1150px) {
    font-size: 18px;
  }
`;
export const ImageWrapper = styled.div`
  @media screen and (max-width: 1082px) {
    max-width: 540px;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
