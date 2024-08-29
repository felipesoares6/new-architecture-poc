// Types and constants related to the entity

export interface Destination {
  destination: string;
  country: string;
  customMessage: string;
  offsite: boolean;
  onsite: boolean;
  location: string;
}

export interface DestinationOption {
  description: string;
  value: string;
}
