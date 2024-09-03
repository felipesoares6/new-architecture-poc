import { Destination } from "../model/compliance.model.ts";
import { destinationsApiResponse } from "./compliance.request.ts";

import { normalizeDestinationsResponse } from "./compliance.normalize.ts";

export interface ComplianceClient {
  getDestinations: () => Promise<Destination[]>;
}

export const complianceClient = (): ComplianceClient => {
  const getDestinations = async () => {
    try {
      const response = await fetch(
        "http://192.168.1.4:8080/src/entities/compliance/client/mock-data.json"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const destinations = (await response.json()) as destinationsApiResponse[];

      const destinationsNormalized = destinations?.map((destination) =>
        normalizeDestinationsResponse(destination)
      );

      return destinationsNormalized;
    } catch (error) {
      console.error("Failed to fetch the data", error);
    }

    return [];
  };

  return {
    getDestinations,
  };
};
