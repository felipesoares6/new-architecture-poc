import React from "react";
import { CompliancePage } from "../ui/pages/compliance.tsx";
import { LoaderFunctionArgs, RouteObject } from "react-router";
import { ComplianceNewRoute } from "./compliace-new-route.tsx";
import { ComplianceEditRoute } from "./compliace-edit-route.tsx";
import { complianceUseCase } from "../use-case/compliance.usecase.ts";
import { URL } from "../../../infrastucture/routes/urls.ts";

export const compliancePageRoutes: RouteObject[] = [
  {
    path: URL.COMPLIANCE_LIST,
    element: <CompliancePage />,
    loader: async () => {
      // Fetch API value when loading the route

      // const { loadDestinations } = complianceUseCase();

      // await loadDestinations();

      return null;
    },
  },
  {
    path: URL.COMPLIANCE_NEW,
    element: <ComplianceNewRoute />,
  },
  {
    path: URL.COMPLIANCE_DETAILS,
    element: <ComplianceEditRoute />,
    loader: async ({ params }: LoaderFunctionArgs<{ id: string }>) => {
      const { loadDestination } = complianceUseCase();

      if (params.id) {
        loadDestination(params.id);
      }

      return { id: params.id };
    },
  },
];
