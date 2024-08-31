import React from "react";
import {
  createBrowserRouter,
  LoaderFunctionArgs,
  RouterProvider,
} from "react-router-dom";
import { ComplianceEditRoute } from "../../entities/compliance/route/compliace-edit-route.tsx";
import { ComplianceNewRoute } from "../../entities/compliance/route/compliace-new-route.tsx";
import { CompliancePage } from "../../entities/compliance/ui/pages/compliance.tsx";
import { complianceUseCase } from "../../entities/compliance/use-case/compliance.usecase.ts";
import { Root } from "./root-route.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "compliance",
        element: <CompliancePage />,
        loader: async () => {
          // Fetch API value when loading the route

          // const { loadDestinations } = complianceUseCase();

          // await loadDestinations();

          return null;
        },
      },
      {
        path: "compliance/new",
        element: <ComplianceNewRoute />,
      },
      {
        path: "compliance/:id",
        element: <ComplianceEditRoute />,
        loader: async ({ params }: LoaderFunctionArgs<{ id: string }>) => {
          const { loadDestination } = complianceUseCase();

          if (params.id) {
            loadDestination(params.id);
          }

          return { id: params.id };
        },
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
