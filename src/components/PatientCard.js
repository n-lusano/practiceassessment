import React from "react";

export default function PatientCard(props) {
  return (
    <div>
      <p>
        Name: {props.firstName} {props.lastName}
        <br />
        Date of birth: {props.dob}
        <br />
        ID: {props.id}
      </p>
    </div>
  );
}
