import { proxy, useSnapshot } from "valtio";
import { useLoginInterface } from "./login.interface";
import { LoginDomain } from "../domain/login.domain";
import { LoginStoreInterface } from "../store/login.store";

// Mock useSnapshot from valtio
jest.mock("valtio", () => ({
  useSnapshot: jest.fn(),
  proxy: jest.requireActual("valtio").proxy, // Use the actual proxy function
}));

describe("useLoginInterface", () => {
  let loginStore: LoginStoreInterface;
  let loginDomain: jest.Mocked<LoginDomain>;

  beforeEach(() => {
    // Create a new store with proxy
    loginStore = proxy({
      email: { value: "", error: null },
      password: { value: "", error: null },
    });

    // Mock the validateEmail function
    loginDomain = {
      validateEmail: jest.fn(),
    };

    // Mock useSnapshot to return the store state
    (useSnapshot as jest.Mock).mockReturnValue(loginStore);
  });

  test("should return the correct initial state", () => {
    const { loginState } = useLoginInterface({ loginStore, loginDomain });

    expect(loginState.email).toEqual({ value: "", error: null });
    expect(loginState.password).toEqual({ value: "", error: null });
  });

  test("should update email value correctly when a valid email is provided", () => {
    loginDomain.validateEmail.mockReturnValue(true);

    const { loginActions } = useLoginInterface({ loginStore, loginDomain });
    loginActions.onEmailChange("test@example.com");

    expect(loginStore.email.value).toBe("test@example.com");
    expect(loginStore.email.error).toBeNull();
  });

  test("should set error when an invalid email is provided", () => {
    loginDomain.validateEmail.mockReturnValue(false);

    const { loginActions } = useLoginInterface({ loginStore, loginDomain });
    loginActions.onEmailChange("invalid-email");

    expect(loginStore.email.value).toBe("invalid-email");
    expect(loginStore.email.error).toBe("Invalid email address");
  });

  test("should not set error when email is empty", () => {
    const { loginActions } = useLoginInterface({ loginStore, loginDomain });
    loginActions.onEmailChange("");

    expect(loginStore.email.value).toBe("");
    expect(loginStore.email.error).toBeNull();
  });

  test("should update password value correctly", () => {
    const { loginActions } = useLoginInterface({ loginStore, loginDomain });
    loginActions.onPasswordChange("password123");

    expect(loginStore.password.value).toBe("password123");
    expect(loginStore.password.error).toBeNull();
  });
});
