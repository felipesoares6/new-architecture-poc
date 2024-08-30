import { ComplianceStore } from "../store/compliance.store.ts";

export const updateDestinationForm = ({
  complianceStore,
  attribute,
  value,
}: {
  complianceStore: ComplianceStore;
  attribute: string;
  value: string;
}) => {
  complianceStore.newDestination = {
    ...complianceStore.newDestination,
    [attribute]: value,
  };
};
