"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import React, { FC } from "react";
import LeftArrow from "@/app/assets/icons/arrow-down-sign-to-navigate (3) 1.svg";
import RightArrow from "@/app/assets/icons/arrow-down-sign-to-navigate (3) 2.svg";
import PartnersImage1 from "@/app/assets/images/partners-image-1.png";
import PartnersImage2 from "@/app/assets/images/partners-image-2png.png";
import PartnersImage3 from "@/app/assets/images/partners-image-3png.png";
import PartnersImage4 from "@/app/assets/images/partners-image-4png.png";
import PartnersImage5 from "@/app/assets/images/partners-image-5png.png";
import PartnersImage6 from "@/app/assets/images/partners-image-6png.png";
import "./style.css";
import { ImageWrapper, SliderItems } from "./style";
import Slider from "react-slick";
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
const SimpleSlider: FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <SliderItems>
        <ImageWrapper>
          <Image
            className="image"
            src={PartnersImage1}
            alt={"partners-image-1"}
          />
        </ImageWrapper>
      </SliderItems>
      <SliderItems>
        <ImageWrapper>
          <Image
            className="image"
            src={PartnersImage2}
            alt={"partners-image-1"}
          />
        </ImageWrapper>
      </SliderItems>
      <SliderItems>
        <ImageWrapper>
          <Image
            className="image"
            src={PartnersImage3}
            alt={"partners-image-1"}
          />
        </ImageWrapper>
      </SliderItems>
      <SliderItems>
        <ImageWrapper>
          <Image
            className="image"
            src={PartnersImage4}
            alt={"partners-image-1"}
          />
        </ImageWrapper>
      </SliderItems>
      <SliderItems>
        <ImageWrapper>
          <Image
            className="image"
            src={PartnersImage5}
            alt={"partners-image-1"}
          />
        </ImageWrapper>
      </SliderItems>
      <SliderItems>
        <ImageWrapper>
          <Image
            className="image"
            src={PartnersImage6}
            alt={"partners-image-1"}
          />
        </ImageWrapper>
      </SliderItems>
      <SliderItems>
        <ImageWrapper>
          <Image
            className="image"
            src={PartnersImage6}
            alt={"partners-image-1"}
          />
        </ImageWrapper>
      </SliderItems>
      <SliderItems>
        <ImageWrapper>
          <Image
            className="image"
            src={PartnersImage6}
            alt={"partners-image-1"}
          />
        </ImageWrapper>
      </SliderItems>
      <SliderItems>
        <ImageWrapper>
          <Image
            className="image"
            src={PartnersImage6}
            alt={"partners-image-1"}
          />
        </ImageWrapper>
      </SliderItems>
      <SliderItems>
        <ImageWrapper>
          <Image
            className="image"
            src={PartnersImage6}
            alt={"partners-image-1"}
          />
        </ImageWrapper>
      </SliderItems>
    </Slider>
  );
};
export default SimpleSlider;
