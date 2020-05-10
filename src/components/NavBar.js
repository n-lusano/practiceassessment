import React from "react";
import { BrowserRouter as Route, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink
        style={{
          textDecoration: "none",
          color: "#21556B",
        }}
        activeStyle={{ fontWeight: "bold", color: "#153543" }}
        to="/"
        exact
      >
        Home
      </NavLink>
      {" | "}
      <NavLink
        style={{
          textDecoration: "none",
          color: "#21556B",
        }}
        activeStyle={{ fontWeight: "bold", color: "#153543" }}
        to="/doctorschedule"
      >
        Doctor Schedule
      </NavLink>
      {" | "}
      <NavLink
        style={{
          textDecoration: "none",
          color: "#21556B",
        }}
        activeStyle={{ fontWeight: "bold", color: "#153543" }}
        to="/patientsignup"
      >
        Patient Signup
      </NavLink>
      {" | "}
      <NavLink
        style={{
          textDecoration: "none",
          color: "#21556B",
        }}
        activeStyle={{ fontWeight: "bold", color: "#153543" }}
        to="/patientdatabase"
      >
        Patient Database
      </NavLink>
    </div>
  );
}
