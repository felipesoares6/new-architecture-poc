import React from "react";
import { ComplianceForm } from "../components/compliance-form.tsx";
import { complianceUseCase } from "../../use-case/compliance.usecase.ts";

// The view will only have access to the interface and/or to the use case as needed, it will never access the store directly

const { updateDestination, updateDestinationForm } = complianceUseCase();

export const ComplianceEditPage = ({
  id,
  navigateBack,
}: {
  id: string;
  navigateBack: () => void;
}) => {
  return (
    <>
      <h1>Edit Destination</h1>

      <ComplianceForm
        buttonText="Update destination"
        onSubmit={() => {
          updateDestination(id);
          navigateBack();
        }}
        onFormChange={updateDestinationForm}
      />
    </>
  );
};
