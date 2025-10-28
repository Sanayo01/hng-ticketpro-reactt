import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx"; // Landing Page (Full screen Hero)
import Contact from "./Contact.jsx"; 
import Layout from "/src/components/Layout.jsx";
import Login from "./pages/Login.jsx"; 
import Signup from "./pages/Signup.jsx"; 
import ProtectedRoute from "./components/ProtectedRoute.jsx"; 
import Dashboard from "./pages/Dashboard.jsx"; 
import TicketManagement from "./pages/TicketManagement.jsx"; 
import "./index.css"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* 1. STANDALONE ROUTES (Pages without the Layout/Navbar/Footer) */}
        <Route path="/auth/login" element={<Login />} /> 
        <Route path="/auth/signup" element={<Signup />} />

        {/* 2. ROUTES THAT USE THE LAYOUT (Nested Routes) */}
        {/* All pages here will automatically get the Navbar/Footer from Layout */}
        <Route element={<Layout />}> 
          {/* Landing Page Route */}
          <Route path="/" element={<App />} /> 
          
          {/* Unprotected Route (Contact) */}
          <Route path="/contact" element={<Contact />} /> 

          {/* Protected Routes (Wrapped by ProtectedRoute) */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} /> 
            <Route path="/tickets" element={<TicketManagement />} /> 
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);