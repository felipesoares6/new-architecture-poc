import React from "react";
import { ComplianceForm } from "./components/compliance-form.tsx";
import { complianceUseCase } from "../../compliance/use-case/compliance.usecase.ts";

// The view will only have access to the interface and/or to the use case as needed, it will never access the store directly

const { updateDestination } = complianceUseCase();

export const ComplianceEditPage = ({
  id,
  onSubmit,
}: {
  id: string;
  onSubmit: () => void;
}) => {
  return (
    <>
      <h1>Edit Destination</h1>

      <ComplianceForm
        buttonText="Update destination"
        onSubmit={() => {
          updateDestination(id);
          onSubmit();
        }}
      />
    </>
  );
};
