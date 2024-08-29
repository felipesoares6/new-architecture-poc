import React from "react";
import { useCompliancePresenter } from "../../compliance/presenter/compliance.presenter.ts";
import { complianceUseCase } from "../../compliance/use-case/compliance.usecase.ts";

const { loadInitialComplianceDestinations } = complianceUseCase();

export const ComplianceList = () => {
  const {
    complianceDestinationsEnabledOnsite,
    complianceDestinationsEnabledOffsite,
    complianceDestinationsOptions,
    isLoadingComplianceDestinations,
  } = useCompliancePresenter();

  return (
    <>
      <button
        style={{
          border: "1px solid #000",
          margin: "16px",
          padding: "16px",
        }}
        onClick={loadInitialComplianceDestinations}
      >
        refetch
      </button>

      {isLoadingComplianceDestinations ? (
        <h3>Loading...</h3>
      ) : (
        <ComplianceListLoaded
          complianceDestinationsEnabledOnsite={
            complianceDestinationsEnabledOnsite
          }
          complianceDestinationsEnabledOffsite={
            complianceDestinationsEnabledOffsite
          }
          complianceDestinationsOptions={complianceDestinationsOptions}
        />
      )}
    </>
  );
};

export const ComplianceListLoaded = ({
  complianceDestinationsEnabledOnsite,
  complianceDestinationsEnabledOffsite,
  complianceDestinationsOptions,
}) => {
  return (
    <div>
      <h3>Compliance destinations enabled off site</h3>

      <div
        style={{
          height: 200,
          overflow: "scroll",
          border: "1px solid #000",
          margin: "16px",
        }}
      >
        {complianceDestinationsEnabledOnsite?.map((complianceDestination) => (
          <div key={complianceDestination.location}>
            {complianceDestination.location}
          </div>
        ))}
      </div>

      <h3>Compliance destinations enabled off site</h3>

      <div
        style={{
          height: 200,
          overflow: "scroll",
          border: "1px solid #000",
          margin: "16px",
        }}
      >
        {complianceDestinationsEnabledOffsite?.map((complianceDestination) => (
          <div key={complianceDestination.location}>
            {complianceDestination.location}
          </div>
        ))}
      </div>

      <h3>Compliance destinations as options</h3>

      <div
        style={{
          height: 200,
          overflow: "scroll",
          border: "1px solid #000",
          margin: "16px",
        }}
      >
        {complianceDestinationsOptions?.map((complianceDestination) => (
          <div key={complianceDestination.value}>
            <p>description: {complianceDestination.description}</p>
            <p>value: {complianceDestination.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
