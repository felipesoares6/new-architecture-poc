import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useLoginInterface } from "./interface/login.interface";
import { LoginPage } from "./login";

jest.mock("./interface/login.interface");

const mockOnEmailChange = jest.fn();
const mockOnPasswordChange = jest.fn();

describe("LoginPage", () => {
  let mockUseLoginInterface: jest.Mock;

  beforeEach(() => {
    mockUseLoginInterface = useLoginInterface as jest.Mock;
    mockUseLoginInterface.mockReturnValue({
      loginState: {
        email: { value: "", error: null },
        password: { value: "", error: null },
      },
      loginActions: {
        onEmailChange: mockOnEmailChange,
        onPasswordChange: mockOnPasswordChange,
      },
    });
  });

  test("should render LoginPage component", () => {
    render(<LoginPage />);
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("password")).toBeInTheDocument();
    expect(screen.getByText("Log in into Winedirect")).toBeInTheDocument();
  });

  test("should call onEmailChange when email input changes", () => {
    render(<LoginPage />);
    const emailInput = screen.getByPlaceholderText("email");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(mockOnEmailChange).toHaveBeenCalledWith("test@example.com");
  });

  test("should call onPasswordChange when password input changes", () => {
    render(<LoginPage />);
    const passwordInput = screen.getByPlaceholderText("password");

    fireEvent.change(passwordInput, { target: { value: "password123" } });
    expect(mockOnPasswordChange).toHaveBeenCalledWith("password123");
  });

  test("should display error message for invalid email", () => {
    mockUseLoginInterface.mockReturnValueOnce({
      loginState: {
        email: { value: "invalid-email", error: "Invalid email address" },
        password: { value: "", error: null },
      },
      loginActions: {
        onEmailChange: mockOnEmailChange,
        onPasswordChange: mockOnPasswordChange,
      },
    });

    render(<LoginPage />);
    expect(screen.getByText("Invalid email address")).toBeInTheDocument();
  });

  test("should not display error message for valid email", () => {
    mockUseLoginInterface.mockReturnValueOnce({
      loginState: {
        email: { value: "test@example.com", error: null },
        password: { value: "", error: null },
      },
      loginActions: {
        onEmailChange: mockOnEmailChange,
        onPasswordChange: mockOnPasswordChange,
      },
    });

    render(<LoginPage />);
    expect(screen.queryByText("Invalid email address")).not.toBeInTheDocument();
  });
});
