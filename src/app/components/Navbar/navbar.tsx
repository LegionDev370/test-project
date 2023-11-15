"use client";
import {
  FlexWrapper,
  Nav,
  FlexLeft,
  FlexRight,
  Rectangle,
  Item,
  Title,
  Logo,
  SocialItem,
  SocialImage,
  ListWrapper,
  ListItems,
  SocialItemFacebook,
  HamburgerItem,
  SearchItem,
  MapItem,
} from "./style";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";
import MapIcon from "../../assets/icons/map.svg";
import Phone from "../../assets/icons/phone.svg";
import LogoIcon from "../../assets/icons/logo.svg";
import Search from "../../assets/icons/search.svg";
import Facebook from "../../assets/icons/facebook.svg";
import FlagRussia from "../../assets/icons/flag-russia.svg";
import Arrowdown from "../../assets/icons/arrow-down-sign.svg";
import { navbar } from "@/app/utils/navbar";
import { Wrapper } from "../Header/style";
import HamburgerIcon from "@/app/assets/icons/hamburger.svg";
const Navbar = () => {
  return (
    <Wrapper>
      <Nav>
        <FlexWrapper>
          <FlexLeft>
            <MapItem>
              <Rectangle>
                <Image priority src={MapIcon} alt="Map icon" />
              </Rectangle>
              <Title>г.Ташкент, Чиланзар 10 квартал, дом 3/1</Title>
            </MapItem>
            <Item>
              <Rectangle>
                <Image priority src={Phone} alt="Phone icon" />
              </Rectangle>
              <Title>г.Ташкент, Чиланзар 10 квартал, дом 3/1</Title>
            </Item>
            <Logo>
              <Image
                className={styles.logo}
                priority
                src={LogoIcon}
                alt="Map icon"
              />
            </Logo>
          </FlexLeft>
          <FlexRight>
            <SearchItem>
              <Rectangle>
                <Image priority src={Search} alt="Phone icon" />
              </Rectangle>
            </SearchItem>
            <SocialItemFacebook>
              <SocialImage>
                <Image priority src={Facebook} alt="Map icon" />
              </SocialImage>
              <Link className={styles.socialLink} href={"#"}>
                Мы на Facebook
              </Link>
            </SocialItemFacebook>
            <SocialItem>
              <SocialImage>
                <Image priority src={FlagRussia} alt="Map icon" />
              </SocialImage>
              <Link className={styles.socialLink} href={"#"}>
                Русский
              </Link>
              <SocialImage>
                <Image priority src={Arrowdown} alt="Map icon" />
              </SocialImage>
            </SocialItem>
            <HamburgerItem>
              <Image src={HamburgerIcon} alt="hamburger" />
            </HamburgerItem>
          </FlexRight>
        </FlexWrapper>
        <ListWrapper>
          {navbar.map(({ path, title, id }) => (
            <ListItems key={id}>
              <Link className={styles.link} href={path}>
                {title}
              </Link>
            </ListItems>
          ))}
        </ListWrapper>
      </Nav>
    </Wrapper>
  );
};
export default Navbar;
