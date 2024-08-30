import { createRoute } from "@tanstack/react-router";
import { CompliancePage } from "../../pages/compliance/compliance.tsx";
import { rootRoute } from "./root-route.tsx";
import { complianceUseCase } from "../../compliance/use-case/compliance.usecase.ts";

export const complianceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/compliance",
  component: CompliancePage,

  loader: async () => {
    const { loadDestinations } = complianceUseCase();

    await loadDestinations();

    return;
  },
});
