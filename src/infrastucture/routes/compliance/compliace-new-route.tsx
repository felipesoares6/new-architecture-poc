import React from "react";
import { useNavigate } from "react-router";
import { ComplianceNewPage } from "../../../pages/compliance/compliance-new.tsx";

export const ComplianceNewRoute = () => {
  const navigate = useNavigate();

  return <ComplianceNewPage onSubmit={() => navigate("/compliance")} />;
};
