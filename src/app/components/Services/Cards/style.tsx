import styled from "styled-components";
import arrowImage from "@/app/assets/icons/right-arrow.svg";
export const CardList = styled.ul`
  display: grid;
  margin-top: 62px;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 50px;
  place-items: center;
  list-style: none;
  @media screen and (max-width: 1232px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 30px;
    column-gap: 20px;
  }
  @media screen and (max-width: 1020px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 30px;
    column-gap: 20px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 30px;
    column-gap: 20px;
  }
`;
export const CardListItem = styled.li`
  max-width: 413px;
  min-height: 491px;
  position: relative;
  z-index: 20;
  width: 100%;
  border-radius: 50px;
  background: #fff;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.05);
`;
export const CardImg = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
export const CardItemTitle = styled.p`
  margin-bottom: 10px;
  color: #0d4c93;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  text-align: center;
  line-height: normal;
  letter-spacing: 1.3px;
`;
export const CardItemDescription = styled.p`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px; /* 150% */
`;
export const Title = styled.p`
  color: #0d4c93;
  font-family: Roboto;
  margin-top: 50px;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const LinkFlex = styled.div`
  max-width: 462px;
  width: 100%;
  margin-top: 81px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  column-gap: 11px;
  align-items: center;
`;
export const RightArrowBtn = styled.button`
  max-width: 30px;
  height: 30px;
  border: none;
  background: none;
  width: 100%;
  background-image: url(${arrowImage.src});
`;
export const Flex = styled.div`
  padding-top: 25px;
  margin-bottom: 40px;
  padding-left: 40px;
  padding-right: 40px;
`;
export const BtnFlex = styled.div`
  position: absolute;
  max-width: 270px;
  z-index: 50;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
`;
