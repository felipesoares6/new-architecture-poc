import React from "react";

import { Input, InputPropsType } from "../../atoms/input/input.tsx";
import { ErrorMessage } from "../../atoms/error-message/error-message.tsx";

type TextFieldPropsType = InputPropsType & {
  errorMessage?: string | null;
};

export const TextField = (props: TextFieldPropsType) => (
  <>
    <Input
      value={props.value}
      placeholder={props.placeholder}
      type={props.type}
      onChange={props.onChange}
      name={props.name}
    />
    {props.errorMessage && <ErrorMessage errorMessage={props.errorMessage} />}
  </>
);
