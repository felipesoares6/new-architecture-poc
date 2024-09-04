import React from "react";
import { Button } from "../../../../style-guide/atoms/button/button.tsx";
import { Input } from "../../../../style-guide/atoms/input/input.tsx";
import { useCompliancePresenter } from "../../presenter/compliance.presenter.ts";

const boxStyle = {
  height: 200,
  overflow: "scroll",
  border: "1px solid #000",
  margin: "16px",
};

// The view will only have access to the interface and/or to the use case as needed, it will never access the store directly

export const ComplianceForm = ({
  buttonText,
  onSubmit,
  onFormChange,
}: {
  buttonText: string;
  onSubmit: () => void;
  onFormChange: ({
    attribute,
    value,
  }: {
    attribute: string;
    value: string;
  }) => void;
}) => {
  const { newDestination } = useCompliancePresenter();

  return (
    <>
      <div style={boxStyle}>
        <Input
          type="text"
          name="location"
          placeholder="Location"
          value={newDestination.location}
          onChange={({ target: { value } }) =>
            onFormChange({ attribute: "location", value })
          }
        />

        <Input
          type="text"
          name="country"
          placeholder="Country"
          value={newDestination.country}
          onChange={({ target: { value } }) =>
            onFormChange({ attribute: "country", value })
          }
        />

        <Input
          type="text"
          name="customMessage"
          placeholder="Custom message"
          value={newDestination.customMessage}
          onChange={({ target: { value } }) =>
            onFormChange({ attribute: "customMessage", value })
          }
        />

        <Input
          type="text"
          name="destination"
          placeholder="Destination"
          value={newDestination.destination}
          onChange={({ target: { value } }) =>
            onFormChange({ attribute: "destination", value })
          }
        />

        <Button onClick={onSubmit}>{buttonText}</Button>
      </div>
    </>
  );
};
