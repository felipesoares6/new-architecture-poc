import React from "react";
import { ComplianceList } from "./compliance-list.tsx";

// The view will only have access to the interface and/or to the use case as needed

// It will never callthe domain or store (state) directly

export const CompliancePage = () => {
  return <ComplianceList />;
};
