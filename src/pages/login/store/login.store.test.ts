import { loginStore } from "./login.store";

describe("loginStore", () => {
  beforeEach(() => {
    loginStore.setState({
      email: { value: "", error: null },
      password: { value: "", error: null },
    });
  });

  test("should initialize with the correct default state", () => {
    const state = loginStore.getState();
    expect(state.email.value).toBe("");
    expect(state.email.error).toBeNull();
    expect(state.password.value).toBe("");
    expect(state.password.error).toBeNull();
  });

  test("should update email value and error correctly", () => {
    const newEmail = "test@example.com";
    const emailError = "Invalid email";

    loginStore.getState().setEmail({ value: newEmail, error: emailError });

    const state = loginStore.getState();
    expect(state.email.value).toBe(newEmail);
    expect(state.email.error).toBe(emailError);
  });

  test("should update email value without an error", () => {
    const newEmail = "test@example.com";

    loginStore.getState().setEmail({ value: newEmail, error: null });

    const state = loginStore.getState();
    expect(state.email.value).toBe(newEmail);
    expect(state.email.error).toBeNull();
  });

  test("should update password value and error correctly", () => {
    const newPassword = "password123";
    const passwordError = "Weak password";

    loginStore
      .getState()
      .setPassword({ value: newPassword, error: passwordError });

    const state = loginStore.getState();

    expect(state.password.value).toBe(newPassword);
    expect(state.password.error).toBe(passwordError);
  });

  test("should update password value without an error", () => {
    const newPassword = "password123";

    loginStore.getState().setPassword({ value: newPassword, error: null });

    const state = loginStore.getState();
    expect(state.password.value).toBe(newPassword);
    expect(state.password.error).toBeNull();
  });
});
