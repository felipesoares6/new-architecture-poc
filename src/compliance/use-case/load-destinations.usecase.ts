import { ComplianceClient } from "../client/compliance.client.ts";
import { ComplianceStore } from "../store/compliance.store.ts";

export const loadDestinations = async ({
  complianceStore,
  complianceClient,
}: {
  complianceStore: ComplianceStore;
  complianceClient: ComplianceClient;
}) => {
  try {
    complianceStore.destinations.isLoading = true;

    const destinationsData = await complianceClient.getDestinations();

    complianceStore.destinations = {
      value: destinationsData,
      error: null,
      isLoading: false,
    };
  } catch (error) {
    complianceStore.destinations = {
      value: [],
      error: `Error: ${error}`,
      isLoading: false,
    };
  }
};
