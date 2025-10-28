import React, { useState } from "react";
import "./contact.css"; 
// No Navbar import needed here!

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thanks ${formData.name}, your message has been received!`);
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <div className="contact-page"> {/* This div is inside the Layout component */}
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Fill out the form below.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {/* ... rest of the form ... */}
        
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}