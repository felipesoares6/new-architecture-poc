export interface LoginDomain {
  validateEmail: (value: string) => boolean;
}

export const loginDomain = (): LoginDomain => ({
  validateEmail: (email: string) =>
    Boolean(
      String(email)
        .toLowerCase()
        .match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) &&
        // Additional checks:
        !email.match(/\.\./) && // Reject double dots in the domain
        !email.match(/^\.|\.$/) && // Reject domain starting or ending with a dot
        !email.match(/^@/) && // Reject missing local part before @
        !email.match(/^-|-\./) // Reject domain starting with a hyphen or dot after hyphen
    ),
});
