import React, { useState } from "react";
import Marker from "./Marker";

const Board = () => {
  const [team, setTeam] = useState("false");
  const teamSwitch = () => {
    setTeam(!team);
  };
  return (
    <div onClick={teamSwitch}>
      <div className="row">
        <div className="col-sm p-0">
          <Marker state="mark" team={team} />
        </div>
        <div className="col-sm p-0">
          <Marker state="mark" team={team} />
        </div>
        <div className="col-sm p-0">
          <Marker state="mark" team={team} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm p-0">
          <Marker state="mark" team={team} />
        </div>
        <div className="col-sm p-0">
          <Marker state="mark" team={team} />
        </div>
        <div className="col-sm p-0">
          <Marker state="mark" team={team} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm p-0">
          <Marker state="mark" team={team} />
        </div>
        <div className="col-sm p-0">
          <Marker state="mark" team={team} />
        </div>
        <div className="col-sm p-0">
          <Marker state="mark" team={team} />
        </div>
      </div>
    </div>
  );
};

export default Board;
