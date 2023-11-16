"use client";
import { FC, ReactNode } from "react";
import Production from "../Production/production";
import Cards from "../Production/Cards/cards";
import Service from "../Services/service";
import CardsService from "../Services/Cards/cards";
import Company from "../Company/company";
import Content from "../Company/Content/content";
import News from "../News/news";
import SimpleSliderPartners from "../Partners/Slider/slider";
import SimpleSliderNews from "../News/Slider/slider";
import Partners from "../Partners/partners";
import Modal from "../Modal/modal";
import { useMyContext } from "../context/context";
const Home: FC<{ children: ReactNode }> = ({ children }) => {
  const { state, dispatch } = useMyContext();
  return (
    <>
      <Modal top={state.modal.modalPosition} />
      {children}
      <main>
        <Production>
          <Cards />
        </Production>
        <Service>
          <CardsService />
        </Service>
        <Company>
          <Content />
        </Company>
        <News>
          <SimpleSliderNews />
        </News>
        <Partners>
          <SimpleSliderPartners />
        </Partners>
      </main>
    </>
  );
};
export default Home;
