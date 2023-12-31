"use client";

import Button from "../../Generic/Button";
import {
  CardList,
  CardListItem,
  CardImg,
  CardItemTitle,
  Title,
  LinkFlex,
  RightArrowBtn,
  Flex,
  ButtonWrap,
} from "./style";
import Image from "next/image";
import styles from "@/app/components/Production/Cards/style.module.css";
import { data } from "./mock/data";
import Link from "next/link";
const Cards = () => {
  return (
    <>
      <Title>ПРОДУКЦИЯ</Title>
      <CardList>
        {data.map((item) => (
          <CardListItem key={item.id}>
            <Flex>
              <CardImg>
                <Image
                  className={styles.cardImage}
                  src={item.path}
                  alt={item.title}
                />
              </CardImg>
              <CardItemTitle>{item.title}</CardItemTitle>
            </Flex>
            <ButtonWrap>
              <Button height={50}>Посмотреть все</Button>
            </ButtonWrap>
          </CardListItem>
        ))}
      </CardList>
      <LinkFlex>
        <Link className={styles.link} href={"#"}>
          Перейти в каталог нашей продукции
        </Link>
        <RightArrowBtn />
      </LinkFlex>
    </>
  );
};
export default Cards;
