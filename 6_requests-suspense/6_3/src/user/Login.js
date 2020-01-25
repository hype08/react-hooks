import React, { useState, useContext, useEffect } from "react";
import { useResource } from "react-request-hook";
import { StateContext } from "../contexts";

export default function Login() {
  const [username, setUsername] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(StateContext);

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: "LOGIN", username });
      }}
    >
      <label htmlFor="login-username">Username: </label>
      <input
        type="text"
        value={username}
        name="login-username"
        id="login-username"
        onChange={handleUsername}
      />
      <label htmlFor="login-password">Password: </label>
      <input
        type="password"
        value={password}
        onChange={handlePassword}
        name="login-password"
        id="login-password"
      />
      <input type="submit" value="Login" disabled={username.length === 0} />
    </form>
  );
}
