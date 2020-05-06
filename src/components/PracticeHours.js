import React from "react";

const date = new Date();
const hour = date.getHours();

const areWeOpen = hour >= 8 && hour < 17 ? "OPEN" : "CLOSED";

export default function PracticeHours() {
  return (
    <div>
      <p>
        We are: <strong>{areWeOpen}</strong>
      </p>
      <p>To make an appointment</p>
      <p>call: 020 555 5555</p>
    </div>
  );
}
