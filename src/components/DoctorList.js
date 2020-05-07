import React, { useState, useEffect } from "react";
import DoctorCard from "./DoctorCard";
import axios from "axios";

export default function DoctorList() {
  const [doctors, set_doctors] = useState([]);

  useEffect(() => {
    async function fetchDoctors() {
      const response = await axios.get(
        `https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors`
      );
      console.log(response.data);
      set_doctors(response.data);
    }

    fetchDoctors();
  }, []);

  function displayDoctors() {
    if (doctors.length === 0) {
      return "Loading...";
    } else {
      return (
        <table>
          <thead>
            <tr>
              <th>Doctor</th>
              <th>Availability</th>
            </tr>
          </thead>
          {doctors.map((doctor) => {
            const availability = doctor.onDuty ? "Available" : "Not available";
            return (
              <DoctorCard
                key={doctor.id}
                doctor={doctor.doctor}
                onDuty={availability}
              />
            );
          })}
        </table>
      );
    }
  }

  return (
    <div>
      <h2>An overview of our doctors</h2>
      {displayDoctors()}
    </div>
  );
}
