import { FC, ReactNode } from "react";
import { Container } from "./style";
const Button: FC<{ children: ReactNode; height: any }> = ({
  children,
  height,
}) => {
  return (
    <Container height={height}>{children ? children : "Generic"}</Container>
  );
};
export default Button;
