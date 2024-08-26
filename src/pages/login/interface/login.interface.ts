import { LoginDomain } from "../domain/login.domain";
import { LoginStore } from "../store/login.store";

export const useLoginInterface = ({
  loginStore,
  loginDomain,
}: {
  loginStore: LoginStore;
  loginDomain: LoginDomain;
}) => {
  const { email, password, setEmail, setPassword } = loginStore;

  const onEmailChange = (value: string) => {
    const isEmailValid = loginDomain.validateEmail(value);

    if (!value || isEmailValid) {
      setEmail({ value, error: null });
    } else {
      setEmail({ value, error: "Invalid email address" });
    }
  };

  const onPasswordChange = (value: string) => {
    setPassword({ value, error: null });
  };

  return {
    loginState: {
      email,
      password,
    },
    loginActions: {
      onEmailChange,
      onPasswordChange,
    },
  };
};
