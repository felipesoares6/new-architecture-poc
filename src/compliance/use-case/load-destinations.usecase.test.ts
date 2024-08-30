import { proxy } from "valtio";
import { ComplianceClient } from "../client/compliance.client";
import {
  ComplianceStore,
  newDestinationInitialState,
} from "../store/compliance.store";
import { loadDestinations } from "./load-destinations.usecase";
import { destinationMock } from "../mock/compliance.mock";

describe("loadDestinations", () => {
  let complianceStore: ComplianceStore;
  let complianceClient: ComplianceClient;

  beforeEach(() => {
    complianceStore = complianceStore = proxy<ComplianceStore>({
      destinations: {
        value: [],
        error: null,
        isLoading: false,
      },
      newDestination: newDestinationInitialState(),
    });

    complianceClient = {
      getDestinations: jest.fn(),
    };
  });

  it("should load destinations successfully and update the store", async () => {
    const mockDestinations = [destinationMock()];
    (complianceClient.getDestinations as jest.Mock).mockResolvedValue(
      mockDestinations
    );

    await loadDestinations({ complianceStore, complianceClient });

    expect(complianceStore.destinations.isLoading).toBe(false);
    expect(complianceStore.destinations.value).toEqual(mockDestinations);
    expect(complianceStore.destinations.error).toBeNull();
  });

  it("should handle errors and update the store with the error message", async () => {
    const mockError = new Error("Network Error");
    (complianceClient.getDestinations as jest.Mock).mockRejectedValue(
      mockError
    );

    await loadDestinations({ complianceStore, complianceClient });

    expect(complianceStore.destinations.isLoading).toBe(false);
    expect(complianceStore.destinations.value).toEqual([]);
    expect(complianceStore.destinations.error).toBe(`Error: ${mockError}`);
  });
});
