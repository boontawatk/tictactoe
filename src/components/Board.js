import React, { useState } from "react";
import Marker from "./Marker";

const Board = () => {
  const [team, setTeam] = useState("false");
  const winCondition = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  const [table, updateTable] = useState([]);
  const teamSwitch = () => {
    setTeam(!team);
  };

  const addTable = (num, team) => {
    const updatedTable = [...table];
    updatedTable[num] = team;
    updateTable(updatedTable);
  };

  //check for winner, if there is a winner, return who's win
  const checkWin = () => {
    for (let i = 0; i < winCondition.length; i++) {
      const [a, b, c] = winCondition[i];
      if (table[a] && table[a] === table[b] && table[a] === table[c]) {
        return table[a];
      }
    }
  };

  const winner = checkWin();

  return (
    <div>
      <div className="row">
        <div className="col-sm p-0">
          <Marker
            num="1"
            team={team}
            addTable={addTable}
            teamSwitch={teamSwitch}
          />
        </div>
        <div className="col-sm p-0">
          <Marker
            num="2"
            team={team}
            addTable={addTable}
            teamSwitch={teamSwitch}
          />
        </div>
        <div className="col-sm p-0">
          <Marker
            num="3"
            team={team}
            addTable={addTable}
            teamSwitch={teamSwitch}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm p-0">
          <Marker
            num="4"
            team={team}
            addTable={addTable}
            teamSwitch={teamSwitch}
          />
        </div>
        <div className="col-sm p-0">
          <Marker
            num="5"
            team={team}
            addTable={addTable}
            teamSwitch={teamSwitch}
          />
        </div>
        <div className="col-sm p-0">
          <Marker
            num="6"
            team={team}
            addTable={addTable}
            teamSwitch={teamSwitch}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm p-0">
          <Marker
            num="7"
            team={team}
            addTable={addTable}
            teamSwitch={teamSwitch}
          />
        </div>
        <div className="col-sm p-0">
          <Marker
            num="8"
            team={team}
            addTable={addTable}
            teamSwitch={teamSwitch}
          />
        </div>
        <div className="col-sm p-0">
          <Marker
            num="9"
            team={team}
            addTable={addTable}
            teamSwitch={teamSwitch}
          />
        </div>
      </div>
    </div>
  );
};

export default Board;
