import { createRoute } from "@tanstack/react-router";
import { LoginPage } from "../../pages/login-v2/login.tsx";
import { rootRoute } from "./root-route.tsx";

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LoginPage,
});
