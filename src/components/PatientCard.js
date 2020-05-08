import React from "react";
import { Link } from "react-router-dom";

export default function PatientCard(props) {
  return (
    <div>
      <p>
        Name: {props.lastName} {props.firstName}
        <br />
        ID: {props.id}
        <br />
        Date of birth: {props.dateOfBirth}
      </p>

      <p>
        <Link to={`/patientdatabase/${props.id}`}>
          <button type="button">
            <p>Show details</p>
          </button>
        </Link>
      </p>
    </div>
  );
}
