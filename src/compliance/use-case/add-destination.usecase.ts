import { Destination } from "../model/compliance.model.ts";
import { ComplianceStore } from "../store/compliance.store.ts";

export const addDestination = ({
  complianceStore,
  destinations,
  destination,
}: {
  complianceStore: ComplianceStore;
  destination: Destination;
  destinations: readonly Destination[];
}) => {
  complianceStore.destinations.isLoading = true;

  complianceStore.destinations = {
    value: [...destinations, destination],
    error: null,
    isLoading: false,
  };
};
