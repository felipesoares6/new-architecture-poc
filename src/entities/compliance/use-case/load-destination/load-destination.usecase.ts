import { ComplianceStore } from "../../store/compliance.store.ts";

export const loadDestination = ({
  id,
  complianceStore,
}: {
  id: string;
  complianceStore: ComplianceStore;
}) => {
  const destination = complianceStore.destinations.value.find(
    (d) => d.destination === id
  );

  if (destination) {
    complianceStore.newDestination = destination;
  }
};
