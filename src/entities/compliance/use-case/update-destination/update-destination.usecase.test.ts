import { proxy } from "valtio";
import {
  ComplianceStore,
  newDestinationInitialState,
} from "../../store/compliance.store";
import { destinationMock } from "../../mock/compliance.mock";
import { updateDestination } from "./update-destination.usecase";

describe("updateDestination", () => {
  let complianceStore: ComplianceStore;

  beforeEach(() => {
    complianceStore = proxy<ComplianceStore>({
      destinations: {
        value: [destinationMock()],
        error: null,
        isLoading: false,
      },
      newDestination: newDestinationInitialState(),
    });
  });

  it("should update the destination on the destinations list", async () => {
    const id = destinationMock().destination;
    const updatedLocation = "test updated location";

    complianceStore.newDestination = {
      ...destinationMock(),
      location: updatedLocation,
    };

    await updateDestination({ id, complianceStore });

    expect(complianceStore.destinations.value[0].location).toEqual(
      updatedLocation
    );
  });

  it("should reset newDestination to initial state", async () => {
    complianceStore.newDestination = destinationMock();

    await updateDestination({
      id: destinationMock().destination,
      complianceStore,
    });

    expect(complianceStore.newDestination).toEqual(
      newDestinationInitialState()
    );
  });
});
