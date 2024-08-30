import {
  ComplianceStore,
  newDestinationInitialState,
} from "../store/compliance.store.ts";

export const addDestination = ({
  complianceStore,
}: {
  complianceStore: ComplianceStore;
}) => {
  complianceStore.destinations = {
    value: [
      ...complianceStore.destinations.value,
      complianceStore.newDestination,
    ],
    error: null,
    isLoading: false,
  };

  complianceStore.newDestination = newDestinationInitialState();
};
