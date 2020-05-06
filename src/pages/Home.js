import React from "react";
import { Link } from "react-router-dom";
import PracticeHours from "../components/PracticeHours";
import Title from "../components/Title";

export default function Home() {
  return (
    <div>
      <Title title="Welcome to AMS GPs" />
      <PracticeHours />
      <p>
        <Link to="/doctorschedule">
          <button>Who is on duty?</button>
        </Link>
      </p>
      <p>
        <Link to="/patientsignup">
          <button>I am a new patient</button>
        </Link>
      </p>
    </div>
  );
}
