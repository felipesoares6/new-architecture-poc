import { ComplianceStore, complianceStore } from "../store/compliance.store.ts";

import { useSnapshot } from "valtio";

// The presenter can read and format from the store to make it available for the UI

// The presenter has access to the store as needed.

// The presenter is a hook, it has to be used inside React.

export const makeUseCompliancePresenter =
  ({ complianceStore }: { complianceStore: ComplianceStore }) =>
  () => {
    const { destinations, newDestination } = useSnapshot(complianceStore);

    return {
      destinationsEnabledOffsite: destinations.value.filter(
        (destination) => destination.offsite
      ),
      destinationsEnabledOnsite: destinations.value.filter(
        (destination) => destination.onsite
      ),
      destinationsOptions: destinations.value.map((destination) => ({
        value: destination.destination,
        description: `${destination.location}`,
      })),
      isLoadingDestinations: destinations.isLoading,
      destinationsError: destinations.error,
      destinations: destinations.value,
      newDestination,
    };
  };

export const useCompliancePresenter = makeUseCompliancePresenter({
  complianceStore,
});
