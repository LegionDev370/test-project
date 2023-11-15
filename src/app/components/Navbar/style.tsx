import styled from "styled-components";
export const Nav = styled.nav`
  padding-top: 63px;
`;
export const FlexLeft = styled.div`
  display: flex;
  column-gap: 45px;
  justify-content: space-between;
  @media screen and (max-width: 1211px) {
    column-gap: 20px;
  }
  @media screen and (max-width: 1068px) {
    column-gap: 5px;
  }
  @media screen and (max-width: 933px) {
    flex-direction: row-reverse;
  }
  @media screen and (max-width: 900px) {
    justify-content: flex-start;
    column-gap: 10px;
  }
  @media screen and (max-width: 460px) {
    margin-right: 11px;
  }
`;
export const FlexRight = styled.div`
  width: fit-content;
  display: flex;
  column-gap: 22px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
  }
`;
export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    justify-content: space-between;
  }
  @media screen and (max-width: 580px) {
    column-gap: 15px;
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
  @media screen and (max-width: 1179px) {
    width: 40;
    height: 40px;
  }
  @media screen and (max-width: 900px) {
    width: 70px;
    height: 70px;
  }
  @media screen and (max-width: 768px) {
    width: 55px;
    height: 61px;
  }
  @media screen and (max-width: 517px) {
    width: 40px;
    height: 40px;
  }
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export const MapItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  @media screen and (max-width: 900px) {
    display: none;
  }
  @media screen and (max-width: 580px) {
    display: none;
  }
`;
export const SearchItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  @media screen and (max-width: 900px) {
    display: none;
  }
  @media screen and (max-width: 580px) {
    display: none;
  }
`;
export const Title = styled.p`
  max-width: 163px;
  color: #5a5a5a;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.4px;
  cursor: pointer;
  &:hover {
    color: #3498db;
  }
  @media screen and (max-width: 1110px) {
    font-size: 15px;
  }
  @media screen and (max-width: 1050px) {
    font-size: 13px;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export const Logo = styled.div`
  @media screen and (max-width: 1162px) {
    display: flex;
    align-items: center;
  }
  cursor: pointer;
`;
export const SocialItem = styled.div`
  max-width: 180px;
  height: 50px;
  display: flex;
  padding: 10px 10px;
  column-gap: 15px;
  align-items: center;
  border-radius: 25px;
  background: #fff;
  @media screen and (max-width: 900px) {
    display: none;
  }
  @media screen and (max-width: 468px) {
    max-width: 80px;
    width: 100%;
    height: 40px;
  }
`;
export const SocialItemFacebook = styled.div`
  max-width: 180px;
  display: flex;
  padding: 10px 10px;
  column-gap: 15px;
  align-items: center;
  border-radius: 25px;
  background: #fff;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export const SocialImage = styled.div``;
export const ListWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 24px 35px;
  margin-top: 50px;
  border-radius: 35px;
  opacity: 0.9;
  background: #fff;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export const ListItems = styled.li``;

///mobile////

export const MobileWrap = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    display: flex;
    align-items: center;
    column-gap: 22px;
  }
`;

export const HamburgerItemMobile = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background: #fff;
  @media screen and (max-width: 900px) {
    width: 70px;
    height: 70px;
  }
  @media screen and (max-width: 517px) {
    width: 40px;
    height: 40px;
  }
`;
export const SocialItemMobile = styled.div`
  width: 85px;
  height: 70px;
  display: flex;
  padding: 10px 10px;
  column-gap: 15px;
  align-items: center;
  border-radius: 25px;
  background: #fff;
  @media screen and (max-width: 768px) {
    width: 81px;
    height: 71px;
  }
  @media screen and (max-width: 517px) {
    width: 60px;
    height: 50px;
    column-gap: 5px;
  }
`;
export const MapItemMobile = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  @media screen and (max-width: 580px) {
    display: none;
  }
  @media screen and (max-width: 677px) {
    display: none;
  }
`;
export const SearchItemMobile = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  @media screen and (max-width: 677px) {
    display: none;
  }
`;
export const ItemMobile = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;
