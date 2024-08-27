import {
  ComplianceDestination,
  ComplianceDestinationsApiResponse,
} from "./compliance.model";

export const normalizeComplianceDestinationsResponse = (
  data: ComplianceDestinationsApiResponse
): ComplianceDestination => ({
  destination: data.destination,
  country: data.country,
  customMessage: data.customMessage,
  offsite: data.offsite,
  onsite: data.onsite,
  location: data.destination,
});
