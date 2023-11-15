"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import React, { FC } from "react";
import LeftArrow from "@/app/assets/icons/arrow-down-sign-to-navigate (3) 1.svg";
import RightArrow from "@/app/assets/icons/arrow-down-sign-to-navigate (3) 2.svg";

import "./style.css";
import {
  BtnBlok,
  DateText,
  Description,
  Flex,
  ImageWrapper,
  SliderItems,
  Title,
} from "./style";
import Slider from "react-slick";
import Button from "@/app/components/Generic/Button/index";
import { data } from "./mock/data";
const CustomPrevArrow: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="custom-prev-arrow">
      <ImageWrapper>
        <Image src={LeftArrow} alt="arrow-left" />
      </ImageWrapper>
    </div>
  );
};

const CustomNextArrow: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="custom-next-arrow">
      <ImageWrapper>
        <Image src={RightArrow} alt="right-arrow" />
      </ImageWrapper>
    </div>
  );
};
const SimpleSliderNews: FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {data.map(({ path, title, description, date, id }) => (
        <SliderItems key={id}>
          <Flex>
            <ImageWrapper>
              <Image className="image" src={path} alt={title} />
            </ImageWrapper>
            <Title>{title}</Title>
            <DateText>{date}</DateText>
            <Description>{description}</Description>
          </Flex>
          <BtnBlok>
            <Button height={50}>Подробнее</Button>
          </BtnBlok>
        </SliderItems>
      ))}
    </Slider>
  );
};
export default SimpleSliderNews;
