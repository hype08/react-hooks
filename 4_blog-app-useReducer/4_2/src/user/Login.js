import React, { useState } from "react";

export default function Login({ dispatch }) {
  const [username, setUsername] = useState("");

  function handleUsername(e) {
    setUsername(e.target.value);
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
      <input type="text" name="login-password" id="login-password" />
      <input type="submit" value="Login" disabled={username.length === 0} />
    </form>
  );
}
