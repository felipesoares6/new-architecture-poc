import { useLoginInterface } from "./login.interface";
import { LoginDomain } from "../domain/login.domain";
import { LoginStore } from "../store/login.store";

describe("useLoginInterface", () => {
  let loginStore: LoginStore;
  let loginDomain: LoginDomain;

  beforeEach(() => {
    loginStore = {
      email: { value: "", error: null },
      password: { value: "", error: null },
      setEmail: jest.fn(),
      setPassword: jest.fn(),
    };

    loginDomain = {
      validateEmail: jest.fn(),
    };
  });

  test("should set email without error when valid email is provided", () => {
    const validEmail = "test@example.com";
    loginDomain.validateEmail = jest.fn().mockReturnValue(true);

    const { loginActions } = useLoginInterface({ loginStore, loginDomain });
    loginActions.onEmailChange(validEmail);

    expect(loginDomain.validateEmail).toHaveBeenCalledWith(validEmail);
    expect(loginStore.setEmail).toHaveBeenCalledWith({
      value: validEmail,
      error: null,
    });
  });

  test("should set email with error when invalid email is provided", () => {
    const invalidEmail = "invalid-email";
    loginDomain.validateEmail = jest.fn().mockReturnValue(false);

    const { loginActions } = useLoginInterface({ loginStore, loginDomain });
    loginActions.onEmailChange(invalidEmail);

    expect(loginDomain.validateEmail).toHaveBeenCalledWith(invalidEmail);
    expect(loginStore.setEmail).toHaveBeenCalledWith({
      value: invalidEmail,
      error: "Invalid email address",
    });
  });

  test("should set email without error when email is empty", () => {
    const emptyEmail = "";

    const { loginActions } = useLoginInterface({ loginStore, loginDomain });
    loginActions.onEmailChange(emptyEmail);

    expect(loginStore.setEmail).toHaveBeenCalledWith({
      value: emptyEmail,
      error: null,
    });
  });

  test("should set password without error when value is provided", () => {
    const password = "password123";

    const { loginActions } = useLoginInterface({ loginStore, loginDomain });
    loginActions.onPasswordChange(password);

    expect(loginStore.setPassword).toHaveBeenCalledWith({
      value: password,
      error: null,
    });
  });
});
