import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { compliancePageRoutes } from "../../entities/compliance/route/compliance-routes.obj.tsx";
import { Root } from "./root-route.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [...compliancePageRoutes],
  },
]);

export const Router = () => <RouterProvider router={router} />;
