import React, { useState } from "react";
import "./Login.css"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    try {
        const response = fetch("http://localhost:5258/{{apiConnect_HostAddress}}/weatherforecast", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data =  response.json();
        console.log("Login successful", data);
      } catch (error) {
        console.error("Error logging in", error);
      }
  };

  return (
    <div className="login-container">
      <div className="login-bg">
        
      </div>
      <div className="login-form-container">
        <h1>Xerox</h1>
        <h2>Blueprint Log In</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
        <div className="form-footer">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <p className="privacy-notice">
          This website uses only strictly necessary cookies. See our{" "}
          <a href="/privacy-policy">Privacy Policy</a> for more information. By logging in, you agree to the{" "}
          <a href="/terms-of-use">Terms of Use</a>.
        </p>
      </div>
    </div>
  );
}

export default Login;
