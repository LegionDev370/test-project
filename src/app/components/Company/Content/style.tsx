import styled from "styled-components";
import Ellipse1 from "@/app/assets/images/ellipse-1.png";
import Ellipse2 from "@/app/assets/images/ellipse-2.png";
import Ellipse3 from "@/app/assets/images/ellipse-3.png";

export const ContentFlex = styled.ul`
  display: flex;
  padding: 0;
  min-height: 470px;
  position: relative;
  list-style: none;
  margin-top: 50px;
`;
export const ContentItemleft = styled.li`
  @media screen and (max-width: 1330px) {
    display: none;
  }
`;
export const ContentItemRight = styled.li`
  max-width: 1024px;
  width: 100%;
  margin-left: auto;
  position: relative;
`;
export const InnerItem = styled.div`
  max-width: 570px;
  min-height: 570px;
  position: absolute;
  left: 0;
  z-index: 100;
  top: -5%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: url(${Ellipse1.src}), url(${Ellipse2.src}),
    url(${Ellipse3.src});
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-position: center, center, center;
  @media screen and (max-width: 1330px) {
    display: none;
  }
`;
export const Title = styled.p`
  margin-bottom: 35px;
  color: #363535;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 173.187%; /* 34.637px */
  letter-spacing: 1.2px;
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;
export const InnerFlex = styled.div`
  width: 100%;
  padding-top: 57px;
  min-height: 454px;
  padding-left: 150px;
  padding-bottom: 25px;
  border-radius: 0px 50px 50px 0px;
  position: absolute;
  background: linear-gradient(180deg, #f5f5f5 0%, rgba(245, 245, 245, 0) 100%);
  @media screen and (max-width: 1330px) {
    padding-left: 0px;
    border-radius: 50px;
    left: 0;
    background: linear-gradient(
      180deg,
      #f5f5f5 0%,
      rgba(245, 245, 245, 0) 100%
    );
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: 1330px) {
    position: static;
    padding-left: 0;
  }
`;
export const InnerBlock = styled.div`
  max-width: 702px;
  padding-left: 80px;
  @media screen and (max-width: 600px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;
export const ButtonWrap = styled.div`
  @media screen and (max-width: 600px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
