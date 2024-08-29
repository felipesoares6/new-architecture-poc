import { proxy } from "valtio";
import { ComplianceStore } from "../store/compliance.store.ts";
import { ComplianceClient } from "../client/compliance.client.ts";
import { makeComplianceUseCase } from "./compliance.usecase.ts";
import { complianceDestinationMock } from "../mock/compliance.mock.ts";

const mockComplianceDestination = complianceDestinationMock();

describe("makeComplianceUseCase", () => {
  it("should load compliance destinations and update the store", async () => {
    // Create a real compliance store using valtio's
    const complianceStore: ComplianceStore = proxy({
      complianceDestinations: {
        value: [],
        isLoading: false,
        error: null,
      },
    });

    // Create a mock compliance client
    const complianceClient: ComplianceClient = {
      getComplianceDestinations: jest
        .fn()
        .mockResolvedValue([mockComplianceDestination]),
    };

    // Create the use case
    const complianceUseCase = makeComplianceUseCase({
      complianceStore,
      complianceClient,
    });

    // Call the function that should load the data
    await complianceUseCase().loadInitialComplianceDestinations();

    // Verify that the store has been updated with the fetched data
    expect(complianceStore.complianceDestinations).toEqual({
      value: [mockComplianceDestination],
      isLoading: false,
      error: null,
    });
  });
});
