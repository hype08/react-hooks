import React from "react";

import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";

export default function UserBar({ user, setUser }) {
  if (user) {
    return <Logout user={user} setUser={setUser} />;
  } else {
    return (
      <>
        <Login setUser={setUser}/>
        <Register setUser={setUser}/>
      </>
    );
  }
}
