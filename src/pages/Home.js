import React from "react";
import { Link } from "react-router-dom";
import PracticeHours from "../components/PracticeHours";

export default function Home() {
  return (
    <div>
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
      <PracticeHours />
    </div>
  );
}
