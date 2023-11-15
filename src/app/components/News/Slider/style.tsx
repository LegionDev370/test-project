import styled from "styled-components";
export const SliderItems = styled.div`
  max-width: 470px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1150px) {
    max-width: 100%;
    width: 100%;
  }
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BtnBlok = styled.div`
  display: flex;
  justify-content: center;
`;
export const Title = styled.h2`
  max-width: 312px;
  margin-bottom: 31px;
  color: #0d4c93;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Description = styled.p`
  max-width: 327px;
  margin-bottom: 41px;
  color: #363535;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
`;
export const ImageWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
export const DateText = styled.p`
  margin-bottom: 14px;
  color: #0d4c93;
  text-align: center;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 133.333% */
`;
