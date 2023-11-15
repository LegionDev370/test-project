"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider1 from "@/app/assets/images/slide-1.png";
import React, { FC } from "react";
import "./style.css";
import {
  Description,
  Flex,
  FlexLeft,
  FlexRight,
  ImageWrapper,
  SliderItems,
  Title,
} from "./style";
import Slider from "react-slick";
import Button from "../Generic/Button";
const PrevArrow = () => {
  return <></>;
};

const NextArrow = () => {
  return <></>;
};
const SimpleSlider: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <Slider {...settings}>
      <SliderItems>
        <Flex>
          <FlexLeft>
            <Title>Анализатор ABL800 FLEX</Title>
            <Description>
              Ориентированный на среднюю или высокую производительность тестов,
              анализатор ABL800 FLEX измеряет полный набор параметров, включая
              pH, газы крови, электролиты, метаболиты и показатели оксиметрии
            </Description>
            <Button height={70}>Подробнее</Button>
          </FlexLeft>
          <FlexRight>
            <ImageWrapper>
              <Image className="slider-image" src={Slider1} alt="slide-1" />
            </ImageWrapper>
          </FlexRight>
        </Flex>
      </SliderItems>
      <SliderItems>
        <Flex>
          <FlexLeft>
            <Title>Анализатор ABL800 FLEX</Title>
            <Description>
              Ориентированный на среднюю или высокую производительность тестов,
              анализатор ABL800 FLEX измеряет полный набор параметров, включая
              pH, газы крови, электролиты, метаболиты и показатели оксиметрии
            </Description>
            <Button height={70}>Подробнее</Button>
          </FlexLeft>
          <FlexRight>
            <ImageWrapper>
              <Image className="slider-image" src={Slider1} alt="slide-1" />
            </ImageWrapper>
          </FlexRight>
        </Flex>
      </SliderItems>
      <SliderItems>
        <Flex>
          <FlexLeft>
            <Title>Анализатор ABL800 FLEX</Title>
            <Description>
              Ориентированный на среднюю или высокую производительность тестов,
              анализатор ABL800 FLEX измеряет полный набор параметров, включая
              pH, газы крови, электролиты, метаболиты и показатели оксиметрии
            </Description>
            <Button height={70}>Подробнее</Button>
          </FlexLeft>
          <FlexRight>
            <ImageWrapper>
              <Image className="slider-image" src={Slider1} alt="slide-1" />
            </ImageWrapper>
          </FlexRight>
        </Flex>
      </SliderItems>
    </Slider>
  );
};
export default SimpleSlider;
