import React, { useState } from "react";

type UserTypes = {
  name: string;
  email: string;
};

function User() {
  const [user, setUser] = useState<UserTypes | null>(null);

  const handleLogin = () => {
    setUser({ name: "John Doe", email: "Johndoe@gmail.com" });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogout}>Log Out</button>
      <h2>User is {user ? "logged In" : "Logged Out"}</h2>
    </div>
  );
}

export default User;
