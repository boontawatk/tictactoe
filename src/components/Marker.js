import React, { useState } from "react";
import "./marker.css";
// state - true,false

const Marker = () => {
  const [state, setState] = useState(false);
  const teamIcon = "X";
  const toggle = () => {
    if (!state) setState(true);
  };
  return (
    <div onClick={toggle}>
      <div className="marker border p-0">{state ? teamIcon : " "}</div>
    </div>
  ); // replace o with space
};

export default Marker;
