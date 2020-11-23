import React from "react";
import { NavLink } from "react-router-dom";

export default function FrontHeader() {
  return (
    <div>
      <NavLink activeClassName="current" to="/home">
        Home
      </NavLink>
      <NavLink activeClassName="current" to="/login">
        Login
      </NavLink>
    </div>
  );
}
