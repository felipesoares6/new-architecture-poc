import React from "react";
import { complianceUseCase } from "../../use-case/compliance.usecase.ts";
import { Button } from "../../../../style-guide/atoms/button/button.tsx";
import { ComplianceList } from "../components/compliance-list.tsx";
import { Link } from "react-router-dom";

// The view will only have access to the interface and/or to the use case as needed, it will never access the store directly

const { loadDestinations } = complianceUseCase();

export const CompliancePage = () => {
  return (
    <>
      <div style={{ border: "1px solid #000", marginBottom: 16, padding: 16 }}>
        <nav>
          <ul>
            <li>
              <Link to="/compliance/new" className="[&.active]:font-bold">
                Add Destination
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Button onClick={loadDestinations}>refetch</Button>
      <ComplianceList />
    </>
  );
};
