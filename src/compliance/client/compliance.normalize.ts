import { Destination } from "../model/compliance.model";
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
