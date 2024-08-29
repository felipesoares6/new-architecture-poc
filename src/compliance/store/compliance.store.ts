import { proxy } from "valtio";
import { ComplianceDestination } from "../domain/compliance.domain";

// The store is the state layer, it can only be read through the interface and to update it we need a use case

export interface ComplianceStore {
  complianceDestinations: {
    value: ComplianceDestination[];
    error: null | string;
    isLoading: boolean;
  };
}

export const complianceStore = proxy<ComplianceStore>({
  complianceDestinations: {
    value: [],
    error: null,
    isLoading: false,
  },
});
