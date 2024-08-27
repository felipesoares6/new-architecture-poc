import { proxy } from "valtio";
import { ComplianceDestination } from "../data/compliance.model";

// The store is the state layer, it can only be read through the interface and to update it we need a use case

export interface ComplianceStore {
  complianceDestinations: ComplianceDestination[];
}

export const complianceStore = proxy<ComplianceStore>({
  complianceDestinations: [],
});
