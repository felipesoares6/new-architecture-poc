import { Destination } from "../domain/compliance.domain";

export const destinationMock = (): Destination => ({
  destination: "Mock Destination",
  country: "Mock Country",
  customMessage: "This is a custom message.",
  offsite: true,
  onsite: false,
  location: "123 Mock Street, Mock City, MC 12345",
});
