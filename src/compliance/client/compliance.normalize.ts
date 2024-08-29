import { Destination } from "../domain/compliance.domain";
import { destinationsApiResponse } from "./compliance.request";

export const normalizeDestinationsResponse = (
  data: destinationsApiResponse
): Destination => ({
  destination: data.destination,
  country: data.country,
  customMessage: data.customMessage,
  offsite: data.offsite,
  onsite: data.onsite,
  location: data.destination,
});
