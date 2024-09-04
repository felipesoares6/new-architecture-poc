import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { destinationMock } from "../../../compliance/mock/compliance.mock";
import { useCompliancePresenter } from "../../presenter/compliance.presenter";
import { ComplianceList, ComplianceListLoaded } from "./compliance-list";
import { newDestinationInitialState } from "../../store/compliance.store";

jest.mock("../../presenter/compliance.presenter.ts");

const mockUseCompliancePresenter =
  useCompliancePresenter as jest.MockedFunction<typeof useCompliancePresenter>;

describe("ComplianceList", () => {
  it("renders loading state", () => {
    mockUseCompliancePresenter.mockReturnValue({
      destinationsEnabledOffsite: [],
      destinationsOptions: [],
      isLoadingDestinations: true,
      destinationsError: null,
      destinations: [],
      newDestination: newDestinationInitialState(),
    });

    render(<ComplianceList />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("renders ComplianceListLoaded when not loading", () => {
    mockUseCompliancePresenter.mockReturnValue({
      destinationsEnabledOffsite: [],
      destinationsOptions: [],
      isLoadingDestinations: false,
      destinationsError: null,
      destinations: [],
      newDestination: newDestinationInitialState(),
    });

    render(
      <Router>
        <ComplianceList />
      </Router>
    );

    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  });
});

describe("ComplianceListLoaded", () => {
  it("renders destination content", () => {
    render(
      <Router>
        <ComplianceListLoaded
          destinationsEnabledOffsite={[destinationMock()]}
          destinationsOptions={[
            {
              value: destinationMock().location,
              description: destinationMock().destination,
            },
          ]}
        />
      </Router>
    );

    expect(screen.getByText(destinationMock().location)).toBeInTheDocument();
  });
});
