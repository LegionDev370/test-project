"use client";
import React, { FC } from "react";
import {
  ModalFlex,
  ModalContent,
  ModalBody,
  ModalHeader,
  FormData,
  ModalHeaderClose,
  ModalHeaderTitle,
  ButtonClose,
  Input,
  TextArea,
  CheckBox,
  CheckInput,
  CheckBoxTitle,
  ButtonWrap,
  Label,
} from "./style";
import Image from "next/image";
import CloseIcon from "@/app/assets/icons/close-modal-icon.svg";
import Button from "../Generic/Button";
import "./style.css";
import { useMyContext } from "../context/context";
interface ModalProps {
  top: number;
}

const Modal: FC<ModalProps> = ({ top }) => {
  const onClose = () => {
    dispatch({ type: "closeModal", payload: null });
    dispatch({ type: "closeModal", payload: null });
    document.documentElement.style.overflow = "inherit";
  };
  const { state, dispatch } = useMyContext();
  return (
    <ModalFlex top={top}>
      <ModalContent>
        <ModalHeader>
          <ModalHeaderClose>
            <ButtonClose onClick={() => onClose()}>
              <Image src={CloseIcon} alt="close-icon" />
            </ButtonClose>
          </ModalHeaderClose>
        </ModalHeader>
        <ModalBody>
          <ModalHeaderTitle>Оставьте заявку</ModalHeaderTitle>
          <FormData>
            <Input placeholder="ФИО" />
            <Input placeholder="Номер телефона*" />
            <Input placeholder="Тема обращения*" />
            <TextArea placeholder="Сообщение*"></TextArea>
            <CheckBox>
              <CheckInput type="checkbox" id="customCheckbox" />
              <Label htmlFor="customCheckbox"></Label>
              <CheckBoxTitle>
                Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
              </CheckBoxTitle>
            </CheckBox>
            <ButtonWrap>
              <Button height={70} onclick={() => onClose()}>
                Отправить
              </Button>
            </ButtonWrap>
          </FormData>
        </ModalBody>
      </ModalContent>
    </ModalFlex>
  );
};

export default Modal;
