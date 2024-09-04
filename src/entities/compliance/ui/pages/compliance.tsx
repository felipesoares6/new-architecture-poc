import React from "react";
import { complianceUseCase } from "../../use-case/compliance.usecase.ts";
import { Button } from "../../../../style-guide/atoms/button/button.tsx";
import { ComplianceList } from "../components/compliance-list.tsx";
import { Link } from "react-router-dom";
import { URL } from "../../../../infrastucture/routes/urls.ts";

// The view will only have access to the interface and/or to the use case as needed, it will never access the store directly

const { loadDestinations } = complianceUseCase();

export const CompliancePage = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={URL.COMPLIANCE_NEW} className="[&.active]:font-bold">
              Add Destination
            </Link>
          </li>
        </ul>
      </nav>

      <Button onClick={loadDestinations}>refetch</Button>
      <ComplianceList />
    </>
  );
};
