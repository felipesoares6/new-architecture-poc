import { Button as BDButton, Box } from "@bigcommerce/big-design";
import React, { ReactElement } from "react";
import styled from "styled-components";

export const ButtonContainer = styled(Box)`
  border-radius: "18px" !important;
  background: "white" !important;
`;

interface ButtonPropsType {
  onClick: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  children: ReactElement | string;
}

const Button = ({ type = "button", ...props }: ButtonPropsType) => (
  <ButtonContainer>
    <BDButton type={type} onClick={() => props.onClick()}>
      {props.children}
    </BDButton>
  </ButtonContainer>
);

export { Button };
