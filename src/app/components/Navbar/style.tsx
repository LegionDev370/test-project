import styled from "styled-components";
export const Nav = styled.nav`
  padding-top: 63px;
`;
export const FlexLeft = styled.div`
  margin-right: auto;
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
    width: 100%;
    margin-right: 20px;
    column-gap: 20px;
  }
  @media screen and (max-width: 460px) {
    margin-right: 11px;
  }
`;
export const FlexRight = styled.div`
  max-width: 400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1115px) {
    max-width: 350px;
  }
  @media screen and (max-width: 1027px) {
    max-width: 220px;
  }
  @media screen and (max-width: 900px) {
    max-width: 200px;
    justify-content: flex-end;
    column-gap: 15px;
  }
  @media screen and (max-width: 580px) {
    max-width: 140px;
  }
`;
export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;
export const Item = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;
export const MapItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  @media screen and (max-width: 580px) {
    display: none;
  }
`;
export const SearchItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
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
    width: 35px;
    height: 35px;
  }
  @media screen and (max-width: 933px) {
    display: flex;
    align-items: center;
    width: 200px;
    height: 70px;
  }
  @media screen and (max-width: 900px) {
    margin-right: auto;
  }
  cursor: pointer;
`;
export const SocialItem = styled.div`
  max-width: 180px;
  display: flex;
  padding: 10px 10px;
  column-gap: 15px;
  align-items: center;
  border-radius: 25px;
  background: #fff;
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
export const HamburgerItem = styled.div`
  max-width: 50px;
  width: 100%;
  height: 50px;
  display: none;
  padding: 10px 10px;
  column-gap: 15px;
  align-items: center;
  border-radius: 25px;
  background: #fff;
  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 468px) {
    max-width: 47px;
    height: 40px;
  }
`;
