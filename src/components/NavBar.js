import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "black" }}
        to="/"
        exact
      >
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "black" }}
        to="/doctorschedule"
      >
        Doctor Schedule
      </NavLink>{" "}
      |{" "}
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "black" }}
        to="/patientsignup"
      >
        Patient Signup
      </NavLink>{" "}
      |{" "}
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "black" }}
        to="/patientdatabase"
      >
        Patient Database
      </NavLink>
    </div>
  );
}
