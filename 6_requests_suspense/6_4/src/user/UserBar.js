import React, { useContext } from "react";
import { StateContext } from "../contexts";

import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";

export default function UserBar() {
  // grab state from state object in contexts
  const { state } = useContext(StateContext);
  // de-structure state to get user
  const { user } = state;

  if (user) {
    return <Logout />;
  } else {
    return (
      <>
        <Login />
        <Register />
      </>
    );
  }
}
