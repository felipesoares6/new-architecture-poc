import React from "react";
import { Button } from "../../style-guide/atoms/button/button.tsx";
import { TextField } from "../../style-guide/molecules/text-field/text-field.tsx";
import { useLoginInterface } from "./interface/login.interface.ts";
import { loginStore } from "./store/login.store.ts";
import { loginDomain } from "./domain/login.domain.ts";

export const LoginPage = () => {
  const { loginState, loginActions } = useLoginInterface({
    loginStore: loginStore,
    loginDomain: loginDomain(),
  });

  return (
    <>
      <h1 className="text-3xl font-bold underline">Login</h1>

      <TextField
        name="email"
        type="email"
        onChange={(evt) => loginActions.onEmailChange(evt.target.value)}
        placeholder="email"
        value={loginState.email.value}
        errorMessage={loginState.email.error}
      />

      <TextField
        name="password"
        type="password"
        onChange={(evt) => loginActions.onPasswordChange(evt.target.value)}
        placeholder="password"
        value={loginState.password.value}
        errorMessage={loginState.password.error}
      />

      <Button onClick={() => {}}>Log in into Winedirect</Button>
    </>
  );
};
