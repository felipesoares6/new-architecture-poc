import { proxy } from "valtio";
import {
  ComplianceStore,
  newDestinationInitialState,
} from "../../store/compliance.store.ts";
import { destinationMock } from "../../mock/compliance.mock.ts";
import { addDestination } from "./add-destination.usecase.ts";

describe("addDestination", () => {
  let complianceStore: ComplianceStore;

  beforeEach(() => {
    complianceStore = proxy<ComplianceStore>({
      destinations: {
        value: [],
        error: null,
        isLoading: false,
      },
      newDestination: destinationMock(),
    });
  });

  it("should add the new destination to the destinations array", () => {
    addDestination({ complianceStore });

    expect(complianceStore.destinations.value).toHaveLength(1);
    expect(complianceStore.destinations.value[0]).toEqual(destinationMock());
  });

  it("should reset newDestination to its initial state", () => {
    addDestination({ complianceStore });

    expect(complianceStore.newDestination).toEqual(
      newDestinationInitialState()
    );
  });
});
