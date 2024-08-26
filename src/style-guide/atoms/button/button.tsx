import { Button as BDButton } from "@bigcommerce/big-design";
import React, { ReactElement } from "react";

interface ButtonPropsType {
  onClick: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  children: ReactElement | string;
}

const Button = ({ type = "button", ...props }: ButtonPropsType) => (
  <BDButton type={type} onClick={() => props.onClick()}>
    {props.children}
  </BDButton>
);

export { Button };
