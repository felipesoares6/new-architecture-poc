import {
  complianceClient,
  ComplianceClient,
} from "../client/compliance.client.ts";
import { Destination } from "../domain/compliance.domain.ts";
import { ComplianceStore, complianceStore } from "../store/compliance.store.ts";
import { addDestination } from "./add-destination.usecase.ts";
import { loadDestinations } from "./load-destinations.usecase.ts";

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
    return {
      loadDestinations: () =>
        loadDestinations({ complianceStore, complianceClient }),
      addDestination: (destination: Destination) =>
        addDestination({ complianceStore, destination }),
    };
  };

export const complianceUseCase = makeComplianceUseCase({
  complianceClient: complianceClient(),
  complianceStore,
});
