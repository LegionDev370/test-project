import styled from "styled-components";
import FooterBackground from "@/app/assets/images/footer-blur.png";
export const Footer = styled.footer`
  min-height: 490px;
  padding-left: 10px;
  padding-right: 10px;
  background: linear-gradient(180deg, #fafafa 0%, rgba(250, 250, 250, 0) 100%);
  background-size: cover;
  background-image: url(${FooterBackground.src});
`;
export const Container = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;
