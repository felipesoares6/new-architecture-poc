import {
  complianceDomain,
  ComplianceDomain,
} from "../domain/compliance.domain.ts";
import { ComplianceStore, complianceStore } from "../store/compliance.store.ts";

import { useSnapshot } from "valtio";

// The presenter could access the domain to apply some bussines logic and transform the data before sending to the component

export const makeUseCompliancePresenter =
  ({
    complianceStore,
    complianceDomain,
  }: {
    complianceStore: ComplianceStore;
    complianceDomain: ComplianceDomain;
  }) =>
  () => {
    const { destinations } = useSnapshot(complianceStore);

    return {
      destinationsEnabledOffsite: complianceDomain.destinationsEnabledOffsite([
        ...destinations.value,
      ]),
      destinationsEnabledOnsite: complianceDomain.destinationsEnabledOnsite([
        ...destinations.value,
      ]),
      destinationsOptions: complianceDomain.destinationsOptions([
        ...destinations.value,
      ]),
      isLoadingDestinations: destinations.isLoading,
      destinationsError: destinations.error,
    };
  };

export const useCompliancePresenter = makeUseCompliancePresenter({
  complianceStore,
  complianceDomain,
});
