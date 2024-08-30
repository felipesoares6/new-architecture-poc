import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { complianceUseCase } from "../../compliance/use-case/compliance.usecase.ts";
import { CompliancePage } from "../../pages/compliance/compliance.tsx";
import { LoginPage } from "../../pages/login-v2/login.tsx";
import { Root } from "./root-route.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/compliance",
        element: <CompliancePage />,
        loader: async () => {
          const { loadDestinations } = complianceUseCase();

          await loadDestinations();

          return null;
        },
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
