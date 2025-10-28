import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  // Check for the required session token in localStorage
  // Mandate: Authentication simulation must use localStorage with a key name: ticketapp_session
  const isAuthenticated = localStorage.getItem("ticketapp_session");

  if (!isAuthenticated) {
    // Mandate: Unauthorized users attempting to access restricted routes must be redirected to /auth/login.
    return <Navigate to="/auth/login" replace />;
  }

  // If authenticated, render the nested route content (Dashboard, Tickets, etc.)
  return <Outlet />;
}