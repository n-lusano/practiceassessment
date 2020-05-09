import React from "react";

export default function PatientCard(props) {
  return (
    <div>
      <p>
        Name: {props.firstName} {props.lastName}
        <br />
        ID: {props.id}
        <br />
        Date of birth: {props.dateOfBirth}
      </p>
    </div>
  );
}
