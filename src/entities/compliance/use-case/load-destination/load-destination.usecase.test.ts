import { proxy } from "valtio";
import { destinationMock } from "../../mock/compliance.mock.ts";
import {
  ComplianceStore,
  complianceStoreInitialState,
} from "../../store/compliance.store.ts";
import { loadDestination } from "./load-destination.usecase.ts";

describe("loadDestination", () => {
  let complianceStore: ComplianceStore;

  beforeEach(() => {
    complianceStore = proxy<ComplianceStore>({
      destinations: {
        value: [destinationMock()],
        error: null,
        isLoading: false,
      },
      newDestination: destinationMock(),
    });
  });

  afterAll(() => {
    complianceStore = complianceStoreInitialState;
  });

  it("should load the destination if found", async () => {
    loadDestination({
      id: destinationMock().destination,
      complianceStore,
    });

    expect(complianceStore.newDestination).toEqual(destinationMock());
  });
});
