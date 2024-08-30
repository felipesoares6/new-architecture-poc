import React from "react";
import { useCompliancePresenter } from "../../compliance/presenter/compliance.presenter.ts";
import { complianceUseCase } from "../../compliance/use-case/compliance.usecase.ts";
import { Button } from "../../style-guide/atoms/button/button.tsx";
import { Input } from "../../style-guide/atoms/input/input.tsx";

const { addDestination, updateDestinationForm } = complianceUseCase();

const boxStyle = {
  height: 200,
  overflow: "scroll",
  border: "1px solid #000",
  margin: "16px",
};

// The view will only have access to the interface and/or to the use case as needed, it will never access the store directly

export const ComplianceForm = () => {
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
            updateDestinationForm({ attribute: "location", value })
          }
        />

        <Input
          type="text"
          name="country"
          placeholder="Country"
          value={newDestination.country}
          onChange={({ target: { value } }) =>
            updateDestinationForm({ attribute: "country", value })
          }
        />

        <Input
          type="text"
          name="customMessage"
          placeholder="Custom message"
          value={newDestination.customMessage}
          onChange={({ target: { value } }) =>
            updateDestinationForm({ attribute: "customMessage", value })
          }
        />

        <Input
          type="text"
          name="destination"
          placeholder="Destination"
          value={newDestination.destination}
          onChange={({ target: { value } }) =>
            updateDestinationForm({ attribute: "destination", value })
          }
        />

        <Button onClick={addDestination}>Add destination</Button>
      </div>
    </>
  );
};
