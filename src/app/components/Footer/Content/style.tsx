import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  column-gap: 50px;
  padding-top: 55px;
  @media screen and (max-width: 1000px) {
    display: block;
  }
`;
export const FlexItemLeft = styled.div``;
export const LeftContent = styled.div`
  max-width: 730px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    max-width: 100%;
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    max-width: 350px;
    flex-direction: column;
  }
`;
export const MapWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  @media screen and (max-width: 600px) {
    row-gap: 10px;
  }
`;
export const ContactWrap = styled.div`
  display: flex;
  row-gap: 30px;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    row-gap: 10px;
  }
`;
export const MapWrapItem = styled.div`
  display: flex;
  column-gap: 15px;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 600px) {
    justify-content: flex-start;
    margin-top: 25px;
  }
`;
export const ContactWrapItem = styled.div`
  display: flex;
  column-gap: 5px;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 600px) {
    justify-content: flex-start;
  }
`;
export const InfoWrapItem = styled.div`
  display: flex;
  column-gap: 15px;
  align-items: center;
`;
export const FlexItemRight = styled.div`
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const Contact = styled.div``;
export const LogoWrap = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  column-gap: 37px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;
export const ListItems = styled.li`
  margin-bottom: 5px;
`;
export const ListItemsTitle = styled.p`
  color: #595959;
  margin-bottom: 10px;
  font-family: Roboto;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 107.692% */
  letter-spacing: 1.04px;
`;
export const RightContent = styled.div`
  display: flex;
  column-gap: 80px;
  @media screen and (max-width: 1155px) {
    column-gap: 30px;
  }
`;
export const EndTitle = styled.p`
  max-width: 352px;
  margin-left: auto;
  margin-top: 65px;
  color: #353535;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  letter-spacing: 0.72px;
`;
export const ContactTitle = styled.p`
  color: #595959;
  font-family: Roboto;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 107.692% */
  letter-spacing: 1.04px;
`;
export const MapTitle = styled.p`
  max-width: 163px;
  color: #5a5a5a;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.4px;
`;
export const PhoneTitle = styled.p`
  max-width: 145px;
  color: #5a5a5a;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.4px;
`;
export const InfoTitle = styled.p`
  max-width: 113px;
  color: #5a5a5a;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.4px;
  &:hover {
    color: #3498db;
  }
`;
export const LogoDesc = styled.p`
  max-width: 442px;
  color: #585858;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  letter-spacing: 0.72px;
  @media screen and (max-width: 600px) {
    margin-top: 25px;
  }
  &:hover {
    cursor: pointer;
    color: #16a085;
  }
`;
export const CompanyTitle = styled.p`
  margin-top: 78px;
  color: #353535;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 155.556% */
  letter-spacing: 0.72px;
  &:hover {
    cursor: pointer;
    color: #16a085;
  }
`;
export const Rectangle = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background: #fff;
`;
