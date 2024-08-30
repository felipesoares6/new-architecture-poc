import { proxy } from "valtio";
import {
  ComplianceStore,
  newDestinationInitialState,
} from "../store/compliance.store";
import { updateDestinationForm } from "./update-destination-form.usecase";
import { destinationMock } from "../mock/compliance.mock";

describe("updateDestinationForm", () => {
  let complianceStore: ComplianceStore;

  beforeEach(() => {
    complianceStore = proxy<ComplianceStore>({
      destinations: {
        value: [],
        error: null,
        isLoading: false,
      },
      newDestination: newDestinationInitialState(),
    });
  });

  it("should update the specified attribute of newDestination", () => {
    updateDestinationForm({
      complianceStore,
      attribute: "location",
      value: destinationMock().location,
    });

    expect(complianceStore.newDestination.location).toBe(
      destinationMock().location
    );
  });
});
