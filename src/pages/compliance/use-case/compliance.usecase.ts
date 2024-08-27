import { ComplianceClient } from "../data/compliance.client";
import { ComplianceStore } from "../store/compliance.store";

// The use case represents the actions the UI can take like trigerring an API call, write something on the state and so on

// The use case can access the domain for any business logic needed

export const complianceUseCase = ({
  complianceStore,
  complianceClient,
}: {
  complianceStore: ComplianceStore;
  complianceClient: ComplianceClient;
}) => {
  const loadInitialComplianceDestinations = async () => {
    const complianceDestinationsData =
      await complianceClient.getComplianceDestinations();

    complianceStore.complianceDestinations = complianceDestinationsData;
  };

  return {
    loadInitialComplianceDestinations,
  };
};
