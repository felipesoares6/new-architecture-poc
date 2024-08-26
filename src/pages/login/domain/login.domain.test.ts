import { loginDomain, LoginDomain } from "./login.domain";

describe("loginDomain", () => {
  let model: LoginDomain;

  beforeEach(() => {
    model = loginDomain();
  });

  test("should return true for a valid email address", () => {
    const validEmails = [
      "test@example.com",
      "user.name+tag+sorting@example.com",
      "user@example.co.uk",
      "user.name@sub.example.com",
      "user@example.org",
    ];

    validEmails.forEach((email) => {
      expect(model.validateEmail(email)).toBe(true);
    });
  });

  test("should return false for an invalid email address", () => {
    const invalidEmails = [
      "plainaddress",
      "@missingusername.com",
      "username@.com",
      "username@.com.",
      "username@111.222.333.44444",
      "username@example..com",
    ];

    invalidEmails.forEach((email) => {
      expect(model.validateEmail(email)).toBe(false);
    });
  });

  test("should return false for an empty string", () => {
    expect(model.validateEmail("")).toBe(false);
  });

  test("should return false for null or undefined", () => {
    expect(model.validateEmail(null as any)).toBe(false);
    expect(model.validateEmail(undefined as any)).toBe(false);
  });

  test("should be case-insensitive", () => {
    const email = "Test@Example.com";
    expect(model.validateEmail(email)).toBe(true);
  });
});
