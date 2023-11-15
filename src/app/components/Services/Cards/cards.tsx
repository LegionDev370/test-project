"use client";
import styles from "./style.module.css";
import Button from "../../Generic/Button";
import {
  CardList,
  CardListItem,
  CardImg,
  CardItemTitle,
  CardItemDescription,
  Flex,
  BtnFlex,
} from "./style";
import Image from "next/image";
import { data } from "./mock/data";
const CardsService = () => {
  return (
    <>
      <CardList>
        {data.map((item) => (
          <CardListItem key={item.id}>
            <CardImg>
              <Image
                className={styles.cardImage}
                src={item.path}
                alt={item.title}
              />
            </CardImg>
            <Flex>
              <CardItemTitle>{item.title}</CardItemTitle>
              <CardItemDescription>{item.description}</CardItemDescription>
            </Flex>
            <BtnFlex>
              <Button height={50}>Подробнее</Button>
            </BtnFlex>
          </CardListItem>
        ))}
      </CardList>
    </>
  );
};
export default CardsService;
