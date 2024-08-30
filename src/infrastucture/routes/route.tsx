import React from "react";
import {
  createBrowserRouter,
  LoaderFunctionArgs,
  RouterProvider,
  useNavigate,
  useParams,
} from "react-router-dom";
import { complianceUseCase } from "../../compliance/use-case/compliance.usecase.ts";
import { ComplianceEditPage } from "../../pages/compliance/compliance-edit.tsx";
import { ComplianceNewPage } from "../../pages/compliance/compliance-new.tsx";
import { CompliancePage } from "../../pages/compliance/compliance.tsx";
import { LoginPage } from "../../pages/login-v2/login.tsx";
import { Root } from "./root-route.tsx";

const ComplianceEditRoute = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  if (!id) {
    return <div> Error loading the destination</div>;
  }

  return (
    <ComplianceEditPage id={id} onSubmit={() => navigate("/compliance")} />
  );
};

const ComplianceNewRoute = () => {
  const navigate = useNavigate();

  return <ComplianceNewPage onSubmit={() => navigate("/compliance")} />;
};

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
