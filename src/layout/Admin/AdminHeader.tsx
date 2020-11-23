import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminHeader() {
  return (
    <div>
      <NavLink activeClassName="current" to="/admin/sample">
        Sample
      </NavLink>
      <NavLink activeClassName="current" to="/admin/dashboard">
        Dashboard
      </NavLink>
    </div>
  );
}
