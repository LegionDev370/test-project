import CardImage1 from "@/app/assets/images/endeavor-large 1.png";
import CardImage2 from "@/app/assets/images/image-2.png";
import CardImage3 from "@/app/assets/images/image-3.png";
import CardImage4 from "@/app/assets/images/image-4.png";
import CardImage5 from "@/app/assets/images/image-5.png";
import CardImage6 from "@/app/assets/images/image-6.png";

import { v4 as uuid } from "uuid";
export const data = [
  {
    id: uuid(),
    path: CardImage1,
    title: "Эндоваскулярная хирургия",
  },
  {
    id: uuid(),
    path: CardImage2,
    title: "Лабораторная диагностика",
  },
  {
    id: uuid(),
    path: CardImage3,
    title: "Кардиохирургия",
  },
  {
    id: uuid(),
    path: CardImage4,
    title: "ДИАБЕТ",
  },
  {
    id: uuid(),
    path: CardImage5,
    title: "ЭНДОУРОЛОГИЯ",
  },
  {
    id: uuid(),
    path: CardImage6,
    title: "АРИТМОЛОГИЯ",
  },
];
