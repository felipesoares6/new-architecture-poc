import { Destination } from "../model/compliance.model";

export const destinationMock = (): Destination => ({
  destination: "Mock Destination",
  country: "Mock Country",
  customMessage: "This is a custom message.",
  offsite: true,
  onsite: true,
  location: "123 Mock Street, Mock City, MC 12345",
});
