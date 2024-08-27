import { createRoute } from "@tanstack/react-router";
import { CompliancePage } from "../../pages/compliance/compliance.tsx";
import { rootRoute } from "./root-route.tsx";
import { complianceClient } from "../../pages/compliance/data/compliance.client.ts";
import { complianceStore } from "../../pages/compliance/store/compliance.store.ts";
import { complianceUseCase } from "../../pages/compliance/use-case/compliance.usecase.ts";

export const complianceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/compliance",
  component: CompliancePage,
  loader: async () => {
    const { loadInitialComplianceDestinations } = complianceUseCase({
      complianceStore,
      complianceClient: complianceClient(),
    });

    await loadInitialComplianceDestinations();

    return;
  },
});
