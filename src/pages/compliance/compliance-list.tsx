import React from "react";
import { useCompliancePresenter } from "../../compliance/presenter/compliance.presenter.ts";
import { complianceUseCase } from "../../compliance/use-case/compliance.usecase.ts";

const { loadInitialComplianceDestinations } = complianceUseCase();

export const ComplianceList = () => {
  const { complianceDestinations } = useCompliancePresenter();

  return (
    <div>
      <button onClick={loadInitialComplianceDestinations}>refetch</button>
      {complianceDestinations?.map((complianceDestination) => (
        <div key={complianceDestination.location}>
          {complianceDestination.location}
        </div>
      ))}
    </div>
  );
};
