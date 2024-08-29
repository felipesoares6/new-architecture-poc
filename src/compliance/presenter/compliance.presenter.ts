import { Destination } from "../model/compliance.model.ts";
import { ComplianceStore, complianceStore } from "../store/compliance.store.ts";

import { useSnapshot } from "valtio";

// The presenter could access the domain to apply some bussines logic and transform the data before sending to the component

export const makeUseCompliancePresenter =
  ({ complianceStore }: { complianceStore: ComplianceStore }) =>
  () => {
    const { destinations } = useSnapshot(complianceStore);

    const getName = (destinations: Destination[]) => destinations;

    getName([...destinations.value]);

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
    };
  };

export const useCompliancePresenter = makeUseCompliancePresenter({
  complianceStore,
});
