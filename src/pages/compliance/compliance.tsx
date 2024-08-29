import React from "react";
import { ComplianceList } from "./compliance-list.tsx";

// The view will only have access to the interface and/or to the use case as needed, it will never access the store directly

export const CompliancePage = () => {
  return <ComplianceList />;
};
