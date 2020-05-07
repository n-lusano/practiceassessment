import React from "react";

export default function DoctorCard(props) {
  return (
    <tbody>
      <tr>
        <td>{props.doctor}</td>
        <td>{props.onDuty}</td>
      </tr>
    </tbody>
  );
}
