import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setFormData({
      ...formData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  function submitForm() {
    //did not manage to deal with submitting an empty form :(
    console.log("Submitting the form", formData);
    setFormSubmitted(true);
  }

  if (formSubmitted) {
    return (
      <h3>
        Form successfully submitted.
        <br /> Thank you!
      </h3>
    );
  }

  return (
    <form>
      <p>
        <label>First name </label>
        <input type="text" name="firstName" onChange={handleInputChange} />
      </p>
      <p>
        <label>Last name </label>
        <input type="text" name="lastName" onChange={handleInputChange} />
      </p>
      <p>
        <label>Email </label>
        <input type="text" name="email" onChange={handleInputChange} />
      </p>
      <p>
        <label>Phone </label>
        <input type="text" name="phoneNumber" onChange={handleInputChange} />
      </p>
      <p>
        <label>Gender </label>
        <select name="gender" onChange={handleInputChange}>
          <option value="select">Select gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
      </p>
      <p>
        <label>Date of birth </label>
        <input
          type="date"
          name="dateOfBirth"
          onChange={handleInputChange}
        ></input>
      </p>
      <p>
        <input type="button" value="Submit" onClick={submitForm} />
      </p>
    </form>
  );
}
