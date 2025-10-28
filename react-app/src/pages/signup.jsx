import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    // Basic form validation for non-empty fields
    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }

    if (formData.password.length < 6) {
        setError("Password must be at least 6 characters long.");
        return;
    }
    
    // --- Signup Simulation ---
    // In a real app, you would make an API call here.
    setMessage(`Account created successfully for ${formData.name}! Please log in.`);
    setFormData({ name: "", email: "", password: "" }); // Clear form
    // In a real app, you would redirect to the login page
    // Optional: Use a toast to show the success message

  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Create Your Account</h1>
        <form onSubmit={handleSignup} className="auth-form">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password (min 6 chars)</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {error && <p className="error-message">{error}</p>}
          {message && <p className="success-message">{message}</p>}
          
          <button type="submit" className="auth-button">Sign Up</button>
        </form>

        <p className="auth-footer-link">
          Already have an account? <Link to="/auth/login">Login</Link>
        </p>
      </div>
    </div>
  );
}