import React, { useState } from "react";

// state - true,false

const Marker = (props) => {
  const [state, setState] = useState(true);
  const toggle = () => {
    setState(!state);
  };
  console.log(state);
  return <div onClick={toggle}>Marker~</div>;
};

export default Marker;
