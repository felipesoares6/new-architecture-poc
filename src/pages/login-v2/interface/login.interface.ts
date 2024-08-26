import { useSnapshot } from "valtio";
import { LoginDomain } from "../domain/login.domain";
import { LoginStoreInterface } from "../store/login.store";

export const useLoginInterface = ({
  loginStore,
  loginDomain,
}: {
  loginStore: LoginStoreInterface;
  loginDomain: LoginDomain;
}) => {
  const { email, password } = useSnapshot(loginStore);

  const onEmailChange = (value: string) => {
    const isEmailValid = loginDomain.validateEmail(value);

    if (!value || isEmailValid) {
      loginStore.email = { value, error: null };
    } else {
      loginStore.email = { value, error: "Invalid email address" };
    }
  };

  const onPasswordChange = (value: string) => {
    loginStore.password = { value, error: null };
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
