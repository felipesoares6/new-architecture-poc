import { ComplianceStore, complianceStore } from "../store/compliance.store.ts";

import { useSnapshot } from "valtio";

// The presenter could access the domain to apply some bussines logic and transform the data before sending to the component

export const makeUseCompliancePresenter =
  ({ complianceStore }: { complianceStore: ComplianceStore }) =>
  () => {
    const { complianceDestinations } = useSnapshot(complianceStore);

    return {
      complianceDestinations,
    };
  };

export const useCompliancePresenter = makeUseCompliancePresenter({
  complianceStore,
});
