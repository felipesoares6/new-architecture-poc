import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";

import { Input as BGInput } from "@bigcommerce/big-design";

export interface InputPropsType {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: InputPropsType) => (
  <BGInput
    name={props.name}
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
  />
);
