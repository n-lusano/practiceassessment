import React from "react";
import Title from "../components/Title";
import PatientList from "../components/PatientList";

export default function PatientDatabase(props) {
  return (
    <div>
      <Title title="Patient Database" />
      <PatientList />
    </div>
  );
}
