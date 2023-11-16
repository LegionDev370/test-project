import { FC, ReactNode } from "react";
import styled from "styled-components";

export const ModalFlex: FC<{ top: number; children: ReactNode }> = styled.div`
  position: absolute;
  z-index: 500;
  max-width: 592px;
  padding-bottom: 15px;
  min-height: 610px;
  width: 100%;
  left: 50%;
  top: ${({ top }) => (top ? `${top}%` : "-50%")};
  transition: all linear 0.5s;
  border-radius: 30px;
  background: #fff;
  transform: translateX(-50%);
  @media screen and (max-width: 1100px) {
    max-width: 500px;
    height: 5%;
  }
  @media screen and (max-width: 620px) {
    max-width: 450px;
  }
  @media screen and (max-width: 500px) {
    max-width: 400px;
  }
  @media screen and (max-width: 429px) {
    max-width: 350px;
  }
  @media screen and (max-width: 370px) {
    max-width: 300px;
  }
`;
export const ModalContent = styled.div``;
export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding-right: 30px;
  padding-top: 30px;
  justify-content: flex-end;
`;
export const ModalHeaderTitle = styled.div`
  color: #5a5a5a;
  font-family: Roboto;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const ModalHeaderClose = styled.div``;
export const ModalBody = styled.div`
  display: flex;
  padding-left: 71px;
  padding-right: 71px;
  flex-direction: column;
  @media screen and (max-width: 1000px) {
    padding-left: 51px;
    padding-right: 51px;
  }
  @media screen and (max-width: 620px) {
    padding-left: 41px;
    padding-right: 41px;
  }
  @media screen and (max-width: 500px) {
    padding-left: 21px;
    padding-right: 21px;
  }
`;
export const ModalBodyText = styled.div``;
export const ButtonClose = styled.button`
  width: 20px;
  cursor: pointer;
  height: 20px;
  border: none;
  background: none;
`;
export const FormData = styled.div`
  margin-top: 30px;
`;
export const Input = styled.input`
  min-height: 56px;
  padding-left: 21px;
  margin-bottom: 19px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 20px;
  background: #f6f6f6;
  &:focus {
    border: 2px solid #0984e3;
    outline: none;
  }
  &::placeholder {
    color: #8d8d8d;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.72px;
  }
  @media screen and (max-width: 425px) {
    min-height: 35px;
  }
`;
export const TextArea = styled.textarea`
  display: block;
  padding-left: 21px;
  padding-top: 12px;
  width: 100%;
  min-height: 147px;
  border-radius: 20px;
  background: #f6f6f6;
  &:focus {
    border: 2px solid #0984e3;
    outline: none;
  }
  &::placeholder {
    color: #8d8d8d;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.72px;
  }
  @media screen and (max-width: 1100px) {
    min-height: 100px;
  }
  @media screen and (max-width: 425px) {
    min-height: 70px;
  }
`;
export const CheckBox = styled.div`
  display: flex;
  margin-top: 15px;
  column-gap: 16px;
`;
interface LabelProps {
  htmlFor: string;
}
export const Label = styled.label<LabelProps>``;
export const CheckBoxTitle = styled.p``;
export const CheckInput = styled.input`
  display: none;
`;
export const ButtonWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;
