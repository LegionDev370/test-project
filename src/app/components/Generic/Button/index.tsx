import { FC, ReactNode } from "react";
import { Container } from "./style";
const Button: FC<{ children: ReactNode; height: any; onclick: any }> = ({
  children,
  height,
  onclick,
}) => {
  return (
    <Container onClick={() => onclick()} height={height}>
      {children ? children : "Generic"}
    </Container>
  );
};
export default Button;
