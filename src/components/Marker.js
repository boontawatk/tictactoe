import React, { useEffect, useState } from "react";
import "./marker.css";
// state - true,false

const Marker = ({ num, team, teamSwitch, addTable }) => {
  const [state, setState] = useState(false);
  const [teamIcon, setTeamIcon] = useState(" ");
  const toggle = () => {
    if (!state) setState(true);
  };
  const currentTeam = team ? "X" : "O";
  useEffect(() => {
    if (state) {
      addTable(num, currentTeam);
      teamSwitch();
      setTeamIcon(currentTeam);
      //add table
      //check if win or not
    }
  }, [state]);

  return (
    <div onClick={toggle}>
      <div className="marker border p-0">{teamIcon}</div>
    </div>
  ); // replace o with space
};

export default Marker;
