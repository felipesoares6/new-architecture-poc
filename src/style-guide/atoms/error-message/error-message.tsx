import React from "react";

import { Flex, Small } from "@bigcommerce/big-design";
import { ErrorIcon } from "@bigcommerce/big-design-icons";

export interface ErrorMessagePropsType {
  errorMessage: string;
}

export const ErrorMessage: React.FC<ErrorMessagePropsType> = ({
  errorMessage,
}) => (
  <Flex
    paddingTop="xSmall"
    data-testid="error-message"
    className="error-message"
  >
    <ErrorIcon color="danger" />

    <Small marginLeft="xxSmall" color="danger" as="span">
      {errorMessage}
    </Small>
  </Flex>
);
