import React from "react";
import { useNavigate } from "react-router";
import { ComplianceNewPage } from "../ui/pages/compliance-new.tsx";
import { URL } from "../../../infrastucture/routes/urls.ts";

export const ComplianceNewRoute = () => {
  const navigate = useNavigate();

  return (
    <ComplianceNewPage navigateBack={() => navigate(URL.COMPLIANCE_LIST)} />
  );
};
