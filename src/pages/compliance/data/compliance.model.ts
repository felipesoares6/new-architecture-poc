export interface ComplianceDestination {
  destination: string;
  country: string;
  customMessage: string;
  offsite: boolean;
  onsite: boolean;
  location: string;
}

export interface ComplianceDestinationsApiResponse {
  tenantId: any;
  location: string;
  offsite: boolean;
  onsite: boolean;
  country: string;
  destination: string;
  customMessage: string;
}
