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
          <button type="button">
            <p>Who is on duty?</p>
          </button>
        </Link>
      </p>
      <p>
        <Link to="/patientsignup">
          <button type="button">
            <p>I am a new patient</p>
          </button>
        </Link>
      </p>
    </div>
  );
}
