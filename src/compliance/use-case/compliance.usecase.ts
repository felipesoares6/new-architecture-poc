import {
  complianceClient,
  ComplianceClient,
} from "../client/compliance.client.ts";
import { ComplianceStore, complianceStore } from "../store/compliance.store.ts";

// The use case represents the actions the UI can take like trigerring an API call, write something on the state and so on

// The use case can access the domain for any business logic needed

export const makeComplianceUseCase =
  ({
    complianceStore,
    complianceClient,
  }: {
    complianceStore: ComplianceStore;
    complianceClient: ComplianceClient;
  }) =>
  () => {
    const loadDestinations = async () => {
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

    return {
      loadDestinations,
    };
  };

export const complianceUseCase = makeComplianceUseCase({
  complianceClient: complianceClient(),
  complianceStore,
});
