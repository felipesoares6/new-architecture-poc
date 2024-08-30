import { proxy } from "valtio";
import { Destination } from "../model/compliance.model";

// The store is the state layer, it can only be read through the interface and to update it we need a use case

export interface ComplianceStore {
  destinations: {
    value: Destination[];
    error: null | string;
    isLoading: boolean;
  };
  newDestination: Destination;
}

export const newDestinationInitialState = (): Destination => ({
  destination: "",
  country: "",
  customMessage: "",
  offsite: true,
  onsite: true,
  location: "",
});

export const complianceStore = proxy<ComplianceStore>({
  destinations: {
    value: [],
    error: null,
    isLoading: false,
  },
  newDestination: newDestinationInitialState(),
});
