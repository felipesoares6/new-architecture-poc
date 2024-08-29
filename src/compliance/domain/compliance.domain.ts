export interface ComplianceDestination {
  destination: string;
  country: string;
  customMessage: string;
  offsite: boolean;
  onsite: boolean;
  location: string;
}

export interface ComplianceDestinationOption {
  description: string;
  value: string;
}

export interface ComplianceDomain {
  complianceDestinationsEnabledOffsite: (
    complianceDestinations: ComplianceDestination[]
  ) => ComplianceDestination[];
  complianceDestinationsEnabledOnsite: (
    complianceDestinations: ComplianceDestination[]
  ) => ComplianceDestination[];
  complianceDestinationsOptions: (
    complianceDestinations: ComplianceDestination[]
  ) => ComplianceDestinationOption[];
}

export const complianceDomain: ComplianceDomain = {
  complianceDestinationsEnabledOffsite: (
    complianceDestinations: ComplianceDestination[]
  ) => complianceDestinations.filter((destination) => destination.offsite),
  complianceDestinationsEnabledOnsite: (
    complianceDestinations: ComplianceDestination[]
  ) => complianceDestinations.filter((destination) => destination.onsite),
  complianceDestinationsOptions: (
    complianceDestinations: ComplianceDestination[]
  ) =>
    complianceDestinations.map((destination) => ({
      description: `${destination.location}-${destination.destination}-${destination.country}`,
      value: destination.destination,
    })),
};
