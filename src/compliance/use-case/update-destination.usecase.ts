import {
  ComplianceStore,
  newDestinationInitialState,
} from "../store/compliance.store.ts";

export const updateDestination = async ({
  id,
  complianceStore,
}: {
  id: string;
  complianceStore: ComplianceStore;
}) => {
  const destinations = complianceStore.destinations.value.filter(
    (d) => d.destination !== id
  );

  complianceStore.destinations.value = [
    complianceStore.newDestination,
    ...destinations,
  ];

  complianceStore.newDestination = newDestinationInitialState();
};
