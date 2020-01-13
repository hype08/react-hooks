import React from "react";

import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";

export default function UserBar() {
  const user = "";

  if (user) {
    return <Logout user={user} />;
  } else {
    return (
      <>
        <Login />
        <Register />
      </>
    );
  }
}
