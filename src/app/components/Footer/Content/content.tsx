"use client";
import { EndTitle, Flex, RightContent } from "./style";
import {
  ContactTitle,
  ContactWrap,
  ContactWrapItem,
  FlexItemLeft,
  FlexItemRight,
  List,
  ListItems,
  MapTitle,
  MapWrap,
  MapWrapItem,
  Rectangle,
  PhoneTitle,
  InfoWrapItem,
  InfoTitle,
  LogoWrap,
  LogoDesc,
  LeftContent,
  CompanyTitle,
  ListItemsTitle,
} from "./style";
import Image from "next/image";
import MapIcon from "@/app/assets/icons/map.svg";
import PhoneIcon from "@/app/assets/icons/phone.svg";
import EmailIcon from "@/app/assets/icons/email.svg";
import Button from "../../Generic/Button";
import LogoIcon from "@/app/assets/icons/logo.svg";
import Link from "next/link";
import styles from "./style.module.css";
import { useMyContext } from "../../context/context";
const Content = () => {
  const { state, dispatch } = useMyContext();
  const onModal = () => {
    dispatch({ type: "setModal", payload: 0.25 });
    dispatch({ type: "setScroll", payload: 0 });
  };
  return (
    <Flex>
      <FlexItemLeft>
        <LeftContent>
          <ContactTitle>Контакты</ContactTitle>
          <MapWrap>
            <MapWrapItem>
              <Rectangle>
                <Image src={MapIcon} alt="Map icon" />
              </Rectangle>
              <MapTitle>г.Ташкент, Чиланзар 10 квартал, дом 3/1</MapTitle>
            </MapWrapItem>
            <InfoWrapItem>
              <Rectangle>
                <Image src={EmailIcon} alt="Email icon" />
              </Rectangle>
              <InfoTitle>info@medol.uz</InfoTitle>
            </InfoWrapItem>
          </MapWrap>
          <ContactWrap>
            <ContactWrapItem>
              <Rectangle>
                <Image src={PhoneIcon} alt="Phone icon" />
              </Rectangle>
              <PhoneTitle>+998 71 276-62-53 +998 71 276-62-54</PhoneTitle>
            </ContactWrapItem>
            <Button onclick={() => onModal()} height={50}>
              Оставить заявку
            </Button>
          </ContactWrap>
        </LeftContent>
        <LogoWrap>
          <Image src={LogoIcon} alt="Map icon" />
          <LogoDesc>
            Наша цель – построить прозрачный, долгосрочный бизнес, приносить
            огромную пользу населению, путем решения глобальных вопросов.
            Внедряя инновационные технологии на рынок Узбекистана.
          </LogoDesc>
        </LogoWrap>
        <CompanyTitle>© 2021 ООО «Medical Online Services»</CompanyTitle>
      </FlexItemLeft>
      <FlexItemRight>
        <RightContent>
          <List>
            <ListItems>
              <ListItemsTitle>О компании</ListItemsTitle>
            </ListItems>
            <ListItems>
              <Link className={styles.jobLink} href={"#"}>
                История
              </Link>
            </ListItems>
            <ListItems>
              <Link className={styles.jobLink} href={"#"}>
                Партнеры
              </Link>
            </ListItems>
            <Link className={styles.jobLink} href={"#"}>
              Вакансии
            </Link>
            <ListItems></ListItems>
          </List>
          <List>
            <ListItems>
              <ListItemsTitle>Продукция</ListItemsTitle>
            </ListItems>
            <ListItems>
              <Link className={styles.jobLink} href={"#"}>
                Эндоваскулярная хирургия
              </Link>
            </ListItems>
            <ListItems>
              <Link className={styles.jobLink} href={"#"}>
                Аритмология
              </Link>
            </ListItems>
            <Link className={styles.jobLink} href={"#"}>
              {" "}
              Кардиохирургия
            </Link>
            <ListItems>
              <Link className={styles.jobLink} href={"#"}>
                Лабораторная диагностика
              </Link>
            </ListItems>
            <ListItems>
              <Link className={styles.jobLink} href={"#"}>
                Хирургия
              </Link>
            </ListItems>
            <ListItems>
              <Link className={styles.jobLink} href={"#"}>
                Эндоурология
              </Link>
            </ListItems>
            <ListItems>
              <Link className={styles.jobLink} href={"#"}>
                Нейрохирургия
              </Link>
            </ListItems>
            <ListItems>
              <Link className={styles.jobLink} href={"#"}>
                Анестезиология и реанимация
              </Link>
            </ListItems>
            <ListItems>
              <Link className={styles.jobLink} href={"#"}>
                Диабет
              </Link>
            </ListItems>
          </List>
          <List>
            <ListItems>
              <ListItemsTitle>Услуги</ListItemsTitle>
            </ListItems>
            <ListItems>
              <Link className={styles.jobLink} href={"#"}>
                Сервис
              </Link>
            </ListItems>
            <ListItems>
              <Link className={styles.jobLink} href={"#"}>
                Регистрации
              </Link>
            </ListItems>
            <Link className={styles.jobLink} href={"#"}>
              Услуги логистики
            </Link>
            <ListItems></ListItems>
          </List>
        </RightContent>
        <EndTitle>Сайт разработан компанией www.uz</EndTitle>
      </FlexItemRight>
    </Flex>
  );
};
export default Content;
