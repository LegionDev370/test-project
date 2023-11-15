import styled from "styled-components";
import arrowImage from "@/app/assets/icons/right-arrow.svg";
export const CardList = styled.ul`
  width: 100%;
  display: grid;
  padding: 0;
  margin-top: 62px;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 50px;
  list-style: none;
  justify-content: center; /* Horizontally center items */
  align-items: center; /* Vertically center items */
  @media screen and (max-width: 1010px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
  @media screen and (max-width: 624px) {
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
  }
`;
export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const CardListItem = styled.li`
  max-width: 413px;
  margin-left: 0;
  min-height: 439px;
`;
export const CardImg = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
export const Flex = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const CardItemTitle = styled.p`
  max-width: 190px;
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
