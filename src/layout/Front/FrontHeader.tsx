import React from "react";
import { NavLink } from "react-router-dom";

export default function FrontHeader() {
  return (
    <div>
      <ul>
        <li>
          <NavLink activeClassName="current" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="current" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
