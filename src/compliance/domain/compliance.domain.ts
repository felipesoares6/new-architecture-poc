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

export interface ComplianceDomain {
  destinationsEnabledOffsite: (destinations: Destination[]) => Destination[];
  destinationsEnabledOnsite: (destinations: Destination[]) => Destination[];
  destinationsOptions: (destinations: Destination[]) => DestinationOption[];
}

export const complianceDomain: ComplianceDomain = {
  destinationsEnabledOffsite: (destinations: Destination[]) =>
    destinations.filter((destination) => destination.offsite),
  destinationsEnabledOnsite: (destinations: Destination[]) =>
    destinations.filter((destination) => destination.onsite),
  destinationsOptions: (destinations: Destination[]) =>
    destinations.map((destination) => ({
      description: `${destination.location}-${destination.destination}-${destination.country}`,
      value: destination.destination,
    })),
};
