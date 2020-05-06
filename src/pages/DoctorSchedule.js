import React from "react";
import Title from "../components/Title";
import PracticeHours from "../components/PracticeHours";

export default function DoctorSchedule() {
  return (
    <div>
      <Title title="Who is on duty?" />
      <PracticeHours />
    </div>
  );
}
