import React from "react";

import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";

export default function UserBar({ user, dispatch }) {
  if (user) {
    return <Logout user={user} dispatch={dispatch} />;
  } else {
    return (
      <>
        <Login dispatch={dispatch} />
        <Register dispatch={dispatch} />
      </>
    );
  }
}
