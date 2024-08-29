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
    const { complianceDestinations } = useSnapshot(complianceStore);

    return {
      complianceDestinationsEnabledOffsite:
        complianceDomain.complianceDestinationsEnabledOffsite([
          ...complianceDestinations.value,
        ]),
      complianceDestinationsEnabledOnsite:
        complianceDomain.complianceDestinationsEnabledOnsite([
          ...complianceDestinations.value,
        ]),
      complianceDestinationsOptions:
        complianceDomain.complianceDestinationsOptions([
          ...complianceDestinations.value,
        ]),
      isLoadingComplianceDestinations: complianceDestinations.isLoading,
      complianceDestinationsError: complianceDestinations.error,
    };
  };

export const useCompliancePresenter = makeUseCompliancePresenter({
  complianceStore,
  complianceDomain,
});
