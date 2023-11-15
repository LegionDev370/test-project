import Service1 from "@/app/assets/images/service-1.png";
import Service2 from "@/app/assets/images/service-2.png";
import Service3 from "@/app/assets/images/service-3.png";

import { v4 as uuid } from "uuid";
export const data = [
  {
    id: uuid(),
    path: Service1,
    title: "СЕРВИС ОБОРУДОВАНИЯ",
    description:
      "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......",
  },
  {
    id: uuid(),
    path: Service2,
    title: "РЕГИСТРАЦИИ",
    description:
      "Обеспечение получения разрешительных документов, регистрационного удостоверения на изделия медицинского назначения Подготовка объектов к проведению ....",
  },
  {
    id: uuid(),
    path: Service3,
    title: "УСЛУГИ ЛОГИСТИКИ",
    description:
      "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей.....",
  },
];
