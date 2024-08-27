import { ComplianceStore } from "../store/compliance.store";

import { useSnapshot } from "valtio";

// The interface could access the domain to apply some bussines logic and transform the data before sending to the component

// Maybe calling this a presenter instead of interface ?

export const useComplianceInterface = ({
  complianceStore,
}: {
  complianceStore: ComplianceStore;
}) => {
  const { complianceDestinations } = useSnapshot(complianceStore);

  return {
    complianceDestinations,
  };
};
