import React, { useState, useEffect } from "react";
import PatientCard from "./PatientCard";
import axios from "axios";

export default function PatientList() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function fetchPatients() {
      try {
        const response = await axios.get(
          `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients`
        );
        // console.log("Response.data test", response.data);
        setPatients(response.data);
      } catch (error) {
        console.log(`This is the error message: ${error}`);
      }
    }

    fetchPatients();
  }, []);

  function displayPatients() {
    function compareName(patientA, patientB) {
      return patientA.lastName.localeCompare(patientB.lastName);
    }

    const patientArrayCopy = [...patients];
    const sortedPatients = patientArrayCopy.sort(compareName);

    if (sortedPatients.length === 0) {
      return "Loading...";
    } else {
      return (
        <div>
          {sortedPatients.map((patient) => {
            return (
              <PatientCard
                key={patient.id}
                lastName={patient.lastName}
                firstName={patient.firstName}
                id={patient.id}
                dateOfBirth={patient.dateOfBirth}
              />
            );
          })}
        </div>
      );
    }
  }

  return <div>{displayPatients()}</div>;
}
