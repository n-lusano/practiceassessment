import React from "react";
import DoctorList from "./DoctorList";

export default function DoctorCard(props) {
  return (
    <tbody>
      <tr>
        <th>{props.doctor}</th>
        <th>{props.onDuty}</th>
      </tr>
    </tbody>
  );
}
