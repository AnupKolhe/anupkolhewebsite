import React, { useState } from "react";
import "./LoginPageStyle.css";

const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Sign in", username, password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSignIn}  className="login-form">
        <h2>Sign</h2>
        <input
          type="text"
          placeholder="UserName"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="UserName"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginPage;
