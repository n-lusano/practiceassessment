import React from "react";
import Title from "../components/Title";
import PracticeHours from "../components/PracticeHours";
import DoctorList from "../components/DoctorList";

export default function DoctorSchedule() {
  return (
    <div>
      <Title title="Who is on duty?" />

      <DoctorList />
      <PracticeHours />
    </div>
  );
}
