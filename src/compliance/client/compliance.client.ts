import { ComplianceDestination } from "../domain/compliance.domain.ts";
import { ComplianceDestinationsApiResponse } from "./compliance.request.ts";

import { normalizeComplianceDestinationsResponse } from "./compliance.normalize.ts";

export interface ComplianceClient {
  getComplianceDestinations: () => Promise<ComplianceDestination[]>;
}

export const complianceClient = (): ComplianceClient => {
  const getComplianceDestinations = async () => {
    try {
      const response = await fetch(
        "http://192.168.1.4:8080/src/pages/compliance/data/data.json"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const complianceDestinations =
        (await response.json()) as ComplianceDestinationsApiResponse[];

      const complianceDestinationsNormalized = complianceDestinations?.map(
        (complianceDestination) =>
          normalizeComplianceDestinationsResponse(complianceDestination)
      );

      return complianceDestinationsNormalized;
    } catch (error) {
      console.error("Failed to fetch the data", error);
    }

    return [];
  };

  return {
    getComplianceDestinations,
  };
};
