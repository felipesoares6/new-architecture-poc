import React from "react";
import { useComplianceInterface } from "./interface/compliance.interface.ts";
import { complianceStore } from "./store/compliance.store.ts";

// The view will only have access to the interface and/or to the use case as needed

// It will never callthe domain or store (state) directly

export const CompliancePage = () => {
  const { complianceDestinations } = useComplianceInterface({
    complianceStore,
  });

  return (
    <div>
      {complianceDestinations?.map((complianceDestination) => (
        <div key={complianceDestination.location}>
          {complianceDestination.location}
        </div>
      ))}
    </div>
  );
};
