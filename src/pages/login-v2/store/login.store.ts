import { proxy } from "valtio";

type ErrorType = null | string;

export interface LoginStoreInterface {
  email: {
    value: string;
    error: ErrorType;
  };
  password: {
    value: string;
    error: ErrorType;
  };
}

export const loginStore = proxy<LoginStoreInterface>({
  email: {
    value: "",
    error: null,
  },
  password: {
    value: "",
    error: null,
  },
});
