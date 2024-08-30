import React from "react";
import { useNavigate, useParams } from "react-router";
import { ComplianceEditPage } from "../../pages/compliance/compliance-edit.tsx";

export const ComplianceEditRoute = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  if (!id) {
    return <div> Error loading the destination</div>;
  }

  return (
    <ComplianceEditPage id={id} onSubmit={() => navigate("/compliance")} />
  );
};
