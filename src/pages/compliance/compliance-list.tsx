import React from "react";
import { useCompliancePresenter } from "../../compliance/presenter/compliance.presenter.ts";
import { complianceUseCase } from "../../compliance/use-case/compliance.usecase.ts";
import { destinationMock } from "../../compliance/mock/compliance.mock.ts";
import { Button } from "../../style-guide/atoms/button/button.tsx";

const { loadDestinations, addDestination } = complianceUseCase();

const boxStyle = {
  height: 200,
  overflow: "scroll",
  border: "1px solid #000",
  margin: "16px",
};

export const ComplianceList = () => {
  const {
    destinationsEnabledOnsite,
    destinationsEnabledOffsite,
    destinationsOptions,
    isLoadingDestinations,
    destinations,
  } = useCompliancePresenter();

  return (
    <>
      <Button onClick={loadDestinations}>refetch</Button>

      <Button
        onClick={() =>
          addDestination({ destinations, destination: destinationMock() })
        }
      >
        Add destination
      </Button>

      {isLoadingDestinations ? (
        <h3>Loading...</h3>
      ) : (
        <ComplianceListLoaded
          destinationsEnabledOnsite={destinationsEnabledOnsite}
          destinationsEnabledOffsite={destinationsEnabledOffsite}
          destinationsOptions={destinationsOptions}
        />
      )}
    </>
  );
};

export const ComplianceListLoaded = ({
  destinationsEnabledOnsite,
  destinationsEnabledOffsite,
  destinationsOptions,
}) => {
  return (
    <div>
      <h3>Compliance destinations enabled off site</h3>

      <div style={boxStyle}>
        {destinationsEnabledOnsite?.map((destination) => (
          <div key={destination.location}>{destination.location}</div>
        ))}
      </div>

      <h3>Compliance destinations enabled off site</h3>

      <div style={boxStyle}>
        {destinationsEnabledOffsite?.map((destination) => (
          <div key={destination.location}>{destination.location}</div>
        ))}
      </div>

      <h3>Compliance destinations as options</h3>

      <div style={boxStyle}>
        {destinationsOptions?.map((destination) => (
          <div key={destination.value}>
            <p>description: {destination.description}</p>
            <p>value: {destination.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
