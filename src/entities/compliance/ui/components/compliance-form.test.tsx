import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { useCompliancePresenter } from "../../presenter/compliance.presenter.ts";
import { newDestinationInitialState } from "../../store/compliance.store";
import { ComplianceForm } from "./compliance-form";

jest.mock("../../presenter/compliance.presenter.ts");

const mockUseCompliancePresenter =
  useCompliancePresenter as jest.MockedFunction<typeof useCompliancePresenter>;

describe("ComplianceForm", () => {
  beforeEach(() => {
    mockUseCompliancePresenter.mockReturnValue({
      destinationsEnabledOffsite: [],
      destinationsOptions: [],
      isLoadingDestinations: true,
      destinationsError: null,
      destinations: [],
      newDestination: newDestinationInitialState(),
    });
  });

  it("renders the form inputs", () => {
    render(
      <ComplianceForm
        onFormChange={jest.fn()}
        buttonText="Submit"
        onSubmit={jest.fn()}
      />
    );

    expect(screen.getByPlaceholderText("Location")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Country")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Custom message")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Destination")).toBeInTheDocument();

    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  it("calls updateDestinationForm on input change", () => {
    const mockUpdateDestinationForm = jest.fn();

    render(
      <ComplianceForm
        onFormChange={mockUpdateDestinationForm}
        buttonText="Submit"
        onSubmit={jest.fn()}
      />
    );

    fireEvent.change(screen.getByPlaceholderText("Location"), {
      target: { value: "New York" },
    });

    expect(mockUpdateDestinationForm).toHaveBeenCalledWith({
      attribute: "location",
      value: "New York",
    });
  });

  it("calls onSubmit when the form is submitted", () => {
    const mockOnSubmit = jest.fn();
    render(
      <ComplianceForm
        onFormChange={jest.fn()}
        buttonText="Submit"
        onSubmit={mockOnSubmit}
      />
    );

    fireEvent.click(screen.getByText("Submit"));

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });
});
