import React from "react";
import { NavLink } from "react-router-dom";

export default function AdminHeader() {
  return (
    <div>
      <ul>
        <li>
          <NavLink activeClassName="current" to="/admin/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="current" to="/admin/sample-admin-page">
            SampleAdminPage
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
