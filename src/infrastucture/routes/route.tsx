import { RouterProvider, createRouter } from "@tanstack/react-router";
import React from "react";
import { rootRoute } from "./root-route.tsx";
import { indexRoute } from "./index-route.ts";
import { complianceRoute } from "./compliance-route.ts";

const routeTree = rootRoute.addChildren([indexRoute, complianceRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const Router = () => <RouterProvider router={router} />;
