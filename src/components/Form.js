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
    console.log("Submitting the form", formData);
    setFormSubmitted(true);
  }

  if (formSubmitted) {
    return <h3>Thank you!</h3>;
  }

  return (
    <form>
      <div>
        <label>First name </label>
        <input type="text" name="firstName" onChange={handleInputChange} />
      </div>
      <div>
        <label>Last name </label>
        <input type="text" name="lastName" onChange={handleInputChange} />
      </div>
      <div>
        <label>Email </label>
        <input type="text" name="email" onChange={handleInputChange} />
      </div>
      <div>
        <label>Phone </label>
        <input type="text" name="phoneNumber" onChange={handleInputChange} />
      </div>
      <div>
        <label>Gender </label>
        {/* <input
                type="text"
                name="gender"
                onChange={handleInputChange}
              /> */}
      </div>
      <div>
        <label>Date of birth </label>
        {/* <input
              type="text"
              name="dateOfBirth"
              onChange={handleInputChange}
              /> */}
      </div>
      <div>
        <input type="button" value="Submit" onClick={submitForm} />
      </div>
    </form>
  );

  //   return (
  //     <form>
  //       <label>
  //         Name:
  //         <input type="text" name="name" />
  //       </label>
  //       <input type="submit" value="Submit" />
  //       <label>
  //         Name:
  //         <input type="text" name="name" />
  //       </label>
  //       <input type="submit" value="Submit" />
  //     </form>
  //   );
}
