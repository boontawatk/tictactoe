import React, { useEffect, useState } from "react";
import "./marker.css";
// state - true,false

const Marker = ({ team, teamSwitch }) => {
  const [state, setState] = useState(false);
  const [teamIcon, setTeamIcon] = useState(" ");
  const toggle = () => {
    console.log("aaa");
    if (!state) setState(true);
  };
  useEffect(() => {
    if (state) {
      teamSwitch();
      setTeamIcon(team ? "X" : "O");
    }
  }, [state]);
  return (
    <div onClick={toggle}>
      <div className="marker border p-0">{teamIcon}</div>
    </div>
  ); // replace o with space
};

export default Marker;
