import React, { useState } from "react";

export default function Form() {
  const [input, setInput] = useState({});

  const handleInputChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

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
        <input type="submit" value="Submit" onClick={console.log(input)} />
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
