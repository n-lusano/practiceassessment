import React, { useState } from "react";

export default function Form() {
  const [input, setInput] = useState({});

  const handleInputChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  console.log(input);

  return (
    <form>
      <div>
        <label>First name </label>
      </div>
      <div>
        <input type="text" name="firstName" onChange={handleInputChange} />
      </div>
      <div>
        <label>Last name </label>
      </div>
      <input type="text" name="lastName" onChange={handleInputChange} />
      <div>
        <label>Email </label>
      </div>
      <input type="text" name="email" onChange={handleInputChange} />
      <div>
        <label>Phone </label>
      </div>
      <div>
        <input type="text" name="phoneNumber" onChange={handleInputChange} />
      </div>
      <div>
        <label>Gender </label>
      </div>
      <div>
        {/* <input
                type="text"
                name="gender"
                onChange={handleInputChange}
              /> */}
      </div>
      <div>
        <label>Date of birth </label>
      </div>
      <div>
        {/* <input
              type="text"
              name="dateOfBirth"
              onChange={handleInputChange}
              /> */}
      </div>
      <div>
        <input type="submit" value="Submit" />
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
