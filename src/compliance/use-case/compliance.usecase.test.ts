import { proxy } from "valtio";
import { ComplianceStore } from "../store/compliance.store.ts";
import { ComplianceClient } from "../client/compliance.client.ts";
import { makeComplianceUseCase } from "./compliance.usecase.ts";
import { destinationMock } from "../mock/compliance.mock.ts";

const mockDestination = destinationMock();

describe("makeComplianceUseCase", () => {
  it("should load compliance destinations and update the store", async () => {
    // Create a real compliance store using valtio's
    const complianceStore: ComplianceStore = proxy({
      destinations: {
        value: [],
        isLoading: false,
        error: null,
      },
    });

    // Create a mock compliance client
    const complianceClient: ComplianceClient = {
      getDestinations: jest.fn().mockResolvedValue([mockDestination]),
    };

    // Create the use case
    const complianceUseCase = makeComplianceUseCase({
      complianceStore,
      complianceClient,
    });

    // Call the function that should load the data
    await complianceUseCase().loadDestinations();

    // Verify that the store has been updated with the fetched data
    expect(complianceStore.destinations).toEqual({
      value: [mockDestination],
      isLoading: false,
      error: null,
    });
  });
});
