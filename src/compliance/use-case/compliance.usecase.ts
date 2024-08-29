import {
  complianceClient,
  ComplianceClient,
} from "../client/compliance.client.ts";
import { Destination } from "../model/compliance.model.ts";
import { ComplianceStore, complianceStore } from "../store/compliance.store.ts";
import { addDestination } from "./add-destination.usecase.ts";
import { loadDestinations } from "./load-destinations.usecase.ts";

// The use case represents the actions the UI can take like loading data, write something on the state and so on

// The use case has access to the client and to the store as needed.

// The use case is not a hook, it can be used anywhere.

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

      addDestination: ({
        destinations,
        destination,
      }: {
        destinations: readonly Destination[];
        destination: Destination;
      }) => addDestination({ complianceStore, destinations, destination }),
    };
  };

export const complianceUseCase = makeComplianceUseCase({
  complianceClient: complianceClient(),
  complianceStore,
});
