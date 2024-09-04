import {
  complianceClient,
  ComplianceClient,
} from "../client/compliance.client.ts";
import { ComplianceStore, complianceStore } from "../store/compliance.store.ts";
import { addDestination } from "./add-destination/add-destination.usecase.ts";
import { loadDestination } from "./load-destination/load-destination.usecase.ts";
import { loadDestinations } from "./load-destinations/load-destinations.usecase.ts";
import { updateDestinationForm } from "./update-destination-form/update-destination-form.usecase.ts";
import { updateDestination } from "./update-destination/update-destination.usecase.ts";

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
  () => ({
    updateDestinationForm: ({
      attribute,
      value,
    }: {
      attribute: string;
      value: string;
    }) => updateDestinationForm({ attribute, value, complianceStore }),

    loadDestinations: () =>
      loadDestinations({ complianceStore, complianceClient }),

    loadDestination: (id: string) => loadDestination({ id, complianceStore }),

    addDestination: () => addDestination({ complianceStore }),

    updateDestination: (id: string) =>
      updateDestination({ id, complianceStore }),
  });

export const complianceUseCase = makeComplianceUseCase({
  complianceClient: complianceClient(),
  complianceStore,
});
