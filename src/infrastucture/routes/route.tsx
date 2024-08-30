import React from "react";
import {
  createBrowserRouter,
  LoaderFunctionArgs,
  RouterProvider,
} from "react-router-dom";
import { complianceUseCase } from "../../compliance/use-case/compliance.usecase.ts";
import { CompliancePage } from "../../pages/compliance/compliance.tsx";
import { LoginPage } from "../../pages/login-v2/login.tsx";
import { ComplianceEditRoute } from "./compliace-edit-route.tsx";
import { ComplianceNewRoute } from "./compliace-new-route.tsx";
import { Root } from "./root-route.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "compliance",
        element: <CompliancePage />,
        loader: async () => {
          const { loadDestinations } = complianceUseCase();

          await loadDestinations();

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
