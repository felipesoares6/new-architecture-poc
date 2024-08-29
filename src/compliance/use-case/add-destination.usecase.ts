import { Destination } from "../domain/compliance.domain.ts";
import { ComplianceStore } from "../store/compliance.store.ts";

export const addDestination = async ({
  complianceStore,
  destination,
}: {
  complianceStore: ComplianceStore;
  destination: Destination;
}) => {
  try {
    complianceStore.destinations.isLoading = true;

    complianceStore.destinations = {
      value: [...complianceStore.destinations.value, destination],
      error: null,
      isLoading: false
    };
  }
};
