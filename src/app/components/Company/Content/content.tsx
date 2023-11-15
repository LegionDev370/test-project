import {
  ButtonWrap,
  ContentFlex,
  ContentItemleft,
  ContentItemRight,
  InnerBlock,
  InnerFlex,
  InnerItem,
  Title,
} from "./style";
import Image from "next/image";
import LogoInner from "@/app/assets/images/logo-inner.svg";
import Button from "../../Generic/Button";
const Content = () => {
  return (
    <ContentFlex>
      <ContentItemleft>
        <InnerItem>
          <Image src={LogoInner} alt="logo-inner" />
        </InnerItem>
      </ContentItemleft>
      <ContentItemRight>
        <InnerFlex>
          <InnerBlock>
            <Title>
              Группа компаний MEDOL создавалась высококвалифицированными
              специалистами в сфере медицины, инженерии и экономики, за плечами
              которых значительный опыт на рынке высоких медицинских технологий,
              которая имеет свои представительства в разных уголках Земли. В
              2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical
              Online Services". Цель компании построить прозрачный долгосрочный
              бизнес, принести пользу обществу путем развития и внедрения
              передовых технологий в систему здравоохранения Республики
              Узбекистан.
            </Title>
            <ButtonWrap>
              <Button height={50}>Узнать больше</Button>
            </ButtonWrap>
          </InnerBlock>
        </InnerFlex>
      </ContentItemRight>
    </ContentFlex>
  );
};
export default Content;
