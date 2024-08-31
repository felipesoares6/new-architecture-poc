import React from "react";
import { useCompliancePresenter } from "../../presenter/compliance.presenter.ts";
import { Link } from "react-router-dom";
import {
  Destination,
  DestinationOption,
} from "../../model/compliance.model.ts";

const boxStyle = {
  height: 200,
  overflow: "scroll",
  border: "1px solid #000",
  margin: "16px",
};

// The view will only have access to the interface and/or to the use case as needed, it will never access the store directly

export const ComplianceList = () => {
  const {
    destinationsEnabledOnsite,
    destinationsEnabledOffsite,
    destinationsOptions,
    isLoadingDestinations,
  } = useCompliancePresenter();

  return (
    <>
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
}: {
  destinationsEnabledOnsite: readonly Destination[];
  destinationsEnabledOffsite: readonly Destination[];
  destinationsOptions: readonly DestinationOption[];
}) => {
  return (
    <div>
      <h3>Compliance destinations enabled on site</h3>

      <div style={boxStyle}>
        {destinationsEnabledOnsite?.map((destination) => (
          <Link
            key={destination.location}
            to={`/compliance/${destination.destination}`}
            className="[&.active]:font-bold"
          >
            <div>{destination.location}</div>
          </Link>
        ))}
      </div>

      <h3>Compliance destinations enabled off site</h3>

      <div style={boxStyle}>
        {destinationsEnabledOffsite?.map((destination) => (
          <Link
            key={destination.location}
            to={`/compliance/${destination.destination}`}
            className="[&.active]:font-bold"
          >
            <div>{destination.location}</div>
          </Link>
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
