import React from "react";
import { useNavigate, useParams } from "react-router";
import { ComplianceEditPage } from "../ui/pages/compliance-edit.tsx";
import { URL } from "../../../infrastucture/routes/urls.ts";

export const ComplianceEditRoute = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  if (!id) {
    return <div> Error loading the destination</div>;
  }

  return (
    <ComplianceEditPage
      id={id}
      navigateBack={() => navigate(URL.COMPLIANCE_LIST)}
    />
  );
};
