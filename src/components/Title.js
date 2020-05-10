import React from "react";
import "../style/Global.css";

export default function Title(props) {
  const { title } = props;

  return (
    <div className="card Title">
      <h1>{title}</h1>
    </div>
  );
}
