import styled from "styled-components";
export const Section = styled.section`
  margin-top: 137px;
`;
export const Title = styled.h2`
  color: #0d4c93;
  font-family: Roboto;
  font-size: 40px;
  margin-bottom: 44px;
  font-style: normal;
  text-align: center;
  font-weight: 500;
  line-height: normal;
`;
export const LinkFlex = styled.div`
  display: flex;
  margin-top: 70px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
`;
export const LinkWrap = styled.div`
  max-width: 310px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export const ArrowRightNews = styled.button`
  width: 30px;
  height: 30px;
  background: none;
  border: none;
`;
export const ArrowRightJoin = styled.button``;
