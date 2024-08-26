import { loginStore } from "./login.store";

describe("loginStore", () => {
  afterEach(() => {
    loginStore.email.value = "";
    loginStore.email.error = null;
    loginStore.password.value = "";
    loginStore.password.error = null;
  });

  test("should have the correct initial state", () => {
    expect(loginStore.email.value).toBe("");
    expect(loginStore.email.error).toBeNull();
    expect(loginStore.password.value).toBe("");
    expect(loginStore.password.error).toBeNull();
  });

  test("should update email value correctly", () => {
    loginStore.email.value = "test@example.com";
    expect(loginStore.email.value).toBe("test@example.com");
  });

  test("should update email error correctly", () => {
    loginStore.email.error = "Invalid email";
    expect(loginStore.email.error).toBe("Invalid email");
  });

  test("should update password value correctly", () => {
    loginStore.password.value = "password123";
    expect(loginStore.password.value).toBe("password123");
  });

  test("should update password error correctly", () => {
    loginStore.password.error = "Invalid password";
    expect(loginStore.password.error).toBe("Invalid password");
  });
});
