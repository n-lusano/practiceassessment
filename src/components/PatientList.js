import React, { useState, useEffect } from "react";
import PatientCard from "./PatientCard";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PatientList() {
  const [patientsCards, setPatientsCards] = useState([]);
  const [selectDoc, setSelectDoc] = useState([]);
  const [docId, setDocId] = useState("");

  useEffect(() => {
    setPatientsCards("<h2>Loading ...</h2>");

    const fetchData = async () => {
      const data = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/db`
      );
      // console.log("This is all the data", data);

      setPatientsCards(data.data.patients);
      setSelectDoc(data.data.doctors);
    };

    fetchData();
  }, []);

  if (patientsCards === "<h2>Loading ...</h2>") {
    return <h2>Loading...</h2>;
  }
  function compareName(patient_a, patient_b) {
    return patient_a.lastName.localeCompare(patient_b.lastName);
  }

  const patientsArrayCopy = [...patientsCards];
  const sortedPatients = patientsArrayCopy.sort(compareName);

  const filteredPatients = sortedPatients.filter((patient) => {
    if (!docId) {
      return true;
    }

    const match = patient.doctorId === docId;

    if (match) {
      return true;
    } else {
      return false;
    }
  });

  const changeFilter = (event) => {
    const number = parseInt(event.target.value);
    setDocId(number);
  };

  return (
    <div>
      <label>Doctor:</label>{" "}
      <select value={docId} onChange={changeFilter}>
        <option value={0}>All</option>
        {selectDoc.map((Doc) => {
          return (
            <option key={Doc.id} value={Doc.id}>
              {Doc.doctor}
            </option>
          );
        })}
      </select>
      {filteredPatients.map((Patient) => {
        return (
          <div key={Patient.id}>
            <PatientCard
              firstName={Patient.firstName}
              lastName={Patient.lastName}
              id={Patient.id}
              dob={Patient.dateOfBirth}
            ></PatientCard>
            <Link to={`/patientDetails/${Patient.id}`}>
              <button>Show details</button>
            </Link>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}
