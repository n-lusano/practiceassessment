import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import DoctorSchedule from "./pages/DoctorSchedule";
import PatientSignup from "./pages/Patient Signup";
import PatientDatabase from "./pages/PatientDatabase";
import PatientDetail from "./pages/PatientDetail";

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/doctorschedule" component={DoctorSchedule} />
        <Route path="/patientsignup" component={PatientSignup} />
        <Route path="/patientdatabase" component={PatientDatabase} />
        <Route path="/patientdetail/:id" component={PatientDetail} />
      </Switch>
    </div>
  );
}

export default App;
