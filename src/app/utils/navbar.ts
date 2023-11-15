import { v4 as uuid } from "uuid";
export const navbar = [
  {
    id: uuid(),
    title: "МАГАЗИН",
    path: "/магазин",
    private: false,
    hidden: false,
  },
  {
    id: uuid(),
    title: "О КОМПАНИИ",
    path: "/компании",
    private: false,
    hidden: false,
  },
  {
    id: uuid(),
    title: "ПРОДУКЦИЯ",
    path: "/продукция",
    private: false,
    hidden: false,
  },
  {
    id: uuid(),
    title: "УСЛУГИ",
    path: "/услуги",
    private: false,
    hidden: false,
  },
  {
    id: uuid(),
    title: "АКЦИИ И НОВОСТИ",
    path: "/новости",
    private: false,
    hidden: false,
  },
  {
    id: uuid(),
    title: "ОБРАТНАЯ СВЯЗЬ",
    path: "/связь",
    private: false,
    hidden: false,
  },
];
