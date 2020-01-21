import React, { useState, useContext } from "react";
import { StateContext } from "../contexts";

export default function Register() {
  const { dispatch } = useContext(StateContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handlePasswordRepeat(e) {
    setPasswordRepeat(e.target.value);
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: "REGISTER", username });
      }}
    >
      <label htmlFor="register-username">Username: </label>
      <input
        type="text"
        onChange={handleUsername}
        name="register-username"
        id="register-username"
      />
      <label htmlFor="register-password">Password: </label>
      <input
        type="text"
        value={password}
        onChange={handlePassword}
        name="register-password"
        id="register-password"
      />
      <label htmlFor="register-password-repeat">Repeat password: </label>
      <input
        type="text"
        value={passwordRepeat}
        onChange={handlePasswordRepeat}
        name="register-password-repeat"
        id="register-password-repeat"
      />
      <input
        type="submit"
        value="Register"
        disabled={username.length === 0 || passwordRepeat !== password}
      />
    </form>
  );
}
