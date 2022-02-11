import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";

function User() {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext?.setUser({ name: "John Doe", email: "Johndoe@gmail.com" });
  };
  const handleLogout = () => {
    userContext?.setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogout}>Log Out</button>
      <h2>User name is {userContext?.user?.name}</h2>
    </div>
  );
}

export default User;
