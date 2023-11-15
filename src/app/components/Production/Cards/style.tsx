import styled from "styled-components";
import arrowImage from "@/app/assets/icons/right-arrow.svg";
export const CardList = styled.ul`
  display: grid;
  margin-top: 62px;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 50px;
  list-style: none;
  @media screen and (max-width: 624px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`;
export const CardListItem = styled.li`
  max-width: 413px;
  width: 100%;
  min-height: 439px;
  padding: 17px 71px;
`;
export const CardImg = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
export const Flex = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
`;
export const CardItemTitle = styled.p`
  color: #363535;
  font-family: Roboto;
  font-size: 24px;
  margin-bottom: 27px;
  margin-top: auto;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.52px;
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
  justify-content: center;
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
