import React, { useState } from "react";
import Marker from "./Marker";

const Board = () => {
  const [team, setTeam] = useState("false");
  const teamSwitch = () => {
    setTeam(!team);
  };
  return (
    <div>
      <div className="row">
        <div className="col-sm p-0">
          <Marker team={team} teamSwitch={teamSwitch} />
        </div>
        <div className="col-sm p-0">
          <Marker team={team} teamSwitch={teamSwitch} />
        </div>
        <div className="col-sm p-0">
          <Marker team={team} teamSwitch={teamSwitch} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm p-0">
          <Marker team={team} teamSwitch={teamSwitch} />
        </div>
        <div className="col-sm p-0">
          <Marker team={team} teamSwitch={teamSwitch} />
        </div>
        <div className="col-sm p-0">
          <Marker team={team} teamSwitch={teamSwitch} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm p-0">
          <Marker team={team} teamSwitch={teamSwitch} />
        </div>
        <div className="col-sm p-0">
          <Marker team={team} teamSwitch={teamSwitch} />
        </div>
        <div className="col-sm p-0">
          <Marker team={team} teamSwitch={teamSwitch} />
        </div>
      </div>
    </div>
  );
};

export default Board;
