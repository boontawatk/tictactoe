import React, { useEffect, useState } from "react";
import "./marker.css";
// state - true,false

const Marker = ({
  num,
  team,
  teamSwitch,
  addTable,
  winner,
  count,
  updateCount,
}) => {
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
      updateCount(count + 1);
      //add table
      //check if win or not
    }
  }, [state]);

  //disable marker
  if (state || winner) {
    return (
      <div>
        <div className="marker border p-0">{teamIcon}</div>
      </div>
    );
  }

  //enable marker
  return (
    <div onClick={toggle}>
      <div className="marker border p-0">{teamIcon}</div>
    </div>
  );
};

export default Marker;
