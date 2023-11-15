import { FC, ReactNode } from "react";
import { Wrapper } from "../Header/style";
import { ArrowRightNews, Section, Title } from "./style";
import { LinkFlex, LinkWrap } from "./style";
import Image from "next/image";
import ArrowLeft from "@/app/assets/icons/arrow-left.svg";
import ArrowRight from "@/app/assets/icons/arrow-right.svg";
import styles from "./style.module.css";

import Link from "next/link";
const News: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Section>
      <Title>НОВОСТИ</Title>
      <Wrapper>
        {children}
        <LinkFlex>
          <LinkWrap>
            <Link className={styles.linkNews} href={"#"}>
              Посмотреть все новости
            </Link>
            <ArrowRightNews>
              <Image src={ArrowLeft} alt="arrow-left" />
            </ArrowRightNews>
          </LinkWrap>
          <LinkWrap>
            <Link className={styles.linkJoin} href={"#"}>
              Подписаться на новости
            </Link>
            <ArrowRightNews>
              <Image src={ArrowRight} alt="arrow-left" />
            </ArrowRightNews>
          </LinkWrap>
        </LinkFlex>
      </Wrapper>
    </Section>
  );
};
export default News;
