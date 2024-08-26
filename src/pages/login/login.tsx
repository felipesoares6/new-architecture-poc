import React from "react";
import { Button } from "../../style-guide/atoms/button/button.tsx";
import { TextField } from "../../style-guide/molecules/text-field/text-field.tsx";
import { useLoginInterface } from "./interface/login.interface.ts";
import { loginDomain } from "./domain/login.domain.ts";
import { loginStore } from "./store/login.store.ts";

import "./login.scss";

export const LoginPage = () => {
  const { loginState, loginActions } = useLoginInterface({
    loginStore: loginStore(),
    loginDomain: loginDomain(),
  });

  return (
    <div className="login">
      <h1 className="login__title">Login</h1>

      <form className="login__form">
        <fieldset className="login__field">
          <TextField
            name="email"
            type="email"
            onChange={(evt) => loginActions.onEmailChange(evt.target.value)}
            placeholder="email"
            value={loginState.email.value}
            errorMessage={loginState.email.error}
          />
        </fieldset>

        <fieldset className="login__field">
          <TextField
            name="password"
            type="password"
            onChange={(evt) => loginActions.onPasswordChange(evt.target.value)}
            placeholder="password"
            value={loginState.password.value}
            errorMessage={loginState.password.error}
          />
        </fieldset>

        <Button onClick={() => {}}>Log in into Winedirect</Button>
      </form>
    </div>
  );
};
