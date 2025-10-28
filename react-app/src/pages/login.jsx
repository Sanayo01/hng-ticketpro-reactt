import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css"; // We will create this next

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    // --- Authentication Simulation ---
    if (email === "test@user.com" && password === "password") {
      // 1. Store a mock session token in localStorage
      localStorage.setItem("ticketapp_session", "mock_jwt_token_12345");
      
      // 2. Redirect to Dashboard
      navigate("/dashboard");
    } else {
      // 3. Show error feedback
      setError("Login failed. Invalid email or password.");
      // In a real app, you would also show a toast notification here
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Login to TicketPro</h1>
        <p>Use test@user.com and 'password' to login.</p>
        
        <form onSubmit={handleLogin} className="auth-form">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error-message">{error}</p>}
          
          <button type="submit" className="auth-button">Log In</button>
        </form>

        <p className="auth-footer-link">
          Don't have an account? <Link to="/auth/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}