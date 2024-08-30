import {
  ComplianceStore,
  newDestinationInitialState,
} from "../store/compliance.store.ts";

export const loadDestination = async ({
  id,
  complianceStore,
}: {
  id: string;
  complianceStore: ComplianceStore;
}) => {
  const destination = complianceStore.destinations.value.find(
    (d) => d.destination === id
  );
  complianceStore.newDestination = destination || newDestinationInitialState();
};
