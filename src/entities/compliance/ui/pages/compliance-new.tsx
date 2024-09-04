import React from "react";
import { ComplianceForm } from "../components/compliance-form.tsx";
import { complianceUseCase } from "../../use-case/compliance.usecase.ts";

// The view will only have access to the interface and/or to the use case as needed, it will never access the store directly

const { addDestination } = complianceUseCase();

export const ComplianceNewPage = ({
  navigateBack,
}: {
  navigateBack: () => void;
}) => {
  return (
    <>
      <h1>Add Destination</h1>

      <ComplianceForm
        buttonText="Create Destination"
        onSubmit={() => {
          addDestination();
          navigateBack();
        }}
      />
    </>
  );
};
