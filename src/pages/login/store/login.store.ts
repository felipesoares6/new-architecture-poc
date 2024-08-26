import { create } from "zustand";

type ErrorType = null | string;

type SetType = ({ value, error }: { value: string; error: ErrorType }) => void;

export interface LoginStore {
  email: {
    value: string;
    error: ErrorType;
  };
  password: {
    value: string;
    error: ErrorType;
  };
  setEmail: SetType;
  setPassword: SetType;
}

export const loginStore = create<LoginStore>((set) => ({
  email: {
    value: "",
    error: null,
  },
  password: {
    value: "",
    error: null,
  },
  setEmail: ({ value, error }) =>
    set(() => ({
      email: {
        value,
        error,
      },
    })),
  setPassword: ({ value, error }) =>
    set(() => ({
      password: {
        value,
        error,
      },
    })),
}));
