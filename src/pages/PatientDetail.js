import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Title from "../components/Title";

export default function PatientDetail() {
  const [patientDetails, setPatientDetails] = useState([]);
  const [patientPrescriptions, setPatientPrescriptions] = useState([]);
  const routeParameters = useParams();
  console.log(routeParameters);

  useEffect(() => {
    async function fetchPatientDetails(id) {
      console.log("What's the id?", id);
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients/${id}`
      );
      console.log(response.data);
      setPatientDetails(response.data);
      setPatientPrescriptions(response.data.prescriptions);
    }
    fetchPatientDetails(routeParameters.id);
  }, []);

  if (patientDetails.length === 0) {
    return (
      <div>
        <Title title="Patient Database" />
        <p>"Loading..."</p>
      </div>
    );
  } else {
    return (
      <div>
        <Title title="Patient Database" />
        <h2>
          {patientDetails.lastName}, {patientDetails.firstName}
        </h2>
        <p>ID: {patientDetails.id}</p>
        <p>Gender: {patientDetails.gender}</p>
        <p>Date of Birth: {patientDetails.dateOfBirth}</p>
        <p>Email: {patientDetails.email}</p>
        <p>Phone Number: {patientDetails.phoneNumber}</p>
        <p>
          Prescriptions:
          {patientPrescriptions.map((prescription) => {
            return <li key={prescription}>{prescription}</li>;
          })}
        </p>
      </div>
    );
  }
}
